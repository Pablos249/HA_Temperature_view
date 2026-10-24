# Dom Heat Card

Polska karta Home Assistant do lokalnego podglądu temperatur domu i instalacji CO. Pracuje wyłącznie na istniejących encjach przekazanych w obiekcie `hass`; nie zawiera integracji backendowej, Modbus, chmury ani telemetrii.

![Licencja MIT](https://img.shields.io/badge/license-MIT-blue.svg)

## Instalacja przez HACS

1. W HACS otwórz **Frontend / Dashboard**, menu z trzema kropkami i **Niestandardowe repozytoria**.
2. Dodaj `https://github.com/Pablos249/HA_Temperature_view` jako kategorię **Dashboard**.
3. Wyszukaj „Dom Heat Card”, wybierz **Pobierz**, po czym odśwież przeglądarkę. HACS powinien dodać zasób automatycznie. Jeżeli karta nie jest widoczna, w **Ustawienia → Dashboardy → Zasoby** sprawdź moduł JavaScript `/hacsfiles/HA_Temperature_view/HA_Temperature_view.js`.
4. Dodaj kartę przez wybór karty niestandardowej „Dom Heat Card” albo YAML poniżej. Edytor zawiera wybór układu i podstawowych encji; przypisania pokoi i pionów są dostępne w YAML.

Po aktualizacji HACS wykonaj twarde odświeżenie strony (`Ctrl+F5`) lub wyczyść pamięć podręczną zasobu. HACS korzysta z pliku z najnowszego GitHub Release, gdy wydanie istnieje.

## Konfiguracja

Identyfikatory w przykładzie są przykładowe — zastąp je encjami z własnej instalacji.

```yaml
type: custom:dom-heat-card
layout: central                  # central albo floors_over_co
floor: ground                    # ekran początkowy: basement, ground, upper
precision: 1
entities:
  outside: sensor.przykladowa_temperatura_zewnetrzna
  hot_water: sensor.przykladowa_cwu
  pump_status: binary_sensor.przykladowy_status_pompy
  pump_supply: sensor.przykladowe_zasilanie_pompy
  pump_return: sensor.przykladowy_powrot_pompy
  buffer_top: sensor.przykladowy_bufor_gora
  buffer_middle: sensor.przykladowy_bufor_srodek
  buffer_bottom: sensor.przykladowy_bufor_dol
  central_supply: sensor.przykladowe_co_zasilanie # opcjonalnie
  central_return: sensor.przykladowe_co_powrot    # opcjonalnie
  risers:
    - name: Pion ogrzewania A
      supply: sensor.przykladowy_pion_1_zasilanie
      return: sensor.przykladowy_pion_1_powrot
    - name: Pion ogrzewania B
      supply: sensor.przykladowy_pion_2_zasilanie
      return: sensor.przykladowy_pion_2_powrot
    - name: Pion ogrzewania C
      supply: sensor.przykladowy_pion_3_zasilanie
      return: sensor.przykladowy_pion_3_powrot
rooms:
  ground:
    - id: office
      name: Biuro
      entity: sensor.przykladowe_biuro
      target: 21
      tolerance: 0.5
    - id: living
      name: Salon
      entity: sensor.przykladowy_salon
  upper:
    - id: bedroom_1
      name: Sypialnia I
      entity: sensor.przykladowa_sypialnia_1
```

`rooms` zachowuje geometrię rzutu w karcie, a pozwala zmieniać wyświetlaną nazwę, encję i temperaturę zadaną. Pomieszczenia bez czujnika są neutralne. Wartość z `target` i `tolerance` delikatnie zabarwia pokój; nie służy do sterowania ogrzewaniem.

Drugi układ pokazuje dwa rzuty nad instalacją:

```yaml
type: custom:dom-heat-card
layout: floors_over_co
floors: [ground, upper]          # np. [basement, ground]
entities:
  outside: sensor.przykladowa_temperatura_zewnetrzna
  pump_supply: sensor.przykladowe_zasilanie_pompy
  pump_return: sensor.przykladowy_powrot_pompy
  buffer_top: sensor.przykladowy_bufor_gora
  buffer_middle: sensor.przykladowy_bufor_srodek
  buffer_bottom: sensor.przykladowy_bufor_dol
```

Dotknięcie odczytu otwiera standardowe Home Assistant **more-info**. Braki, `unknown`, `unavailable` oraz odczyty nieliczbowe są oznaczane `—`; karta nigdy nie zamienia ich na `0 °C`. `ΔT` pojawia się tylko dla liczbowego zasilania i powrotu z tą samą jednostką. Stan pompy pojawia się wyłącznie po skonfigurowaniu `pump_status`.

## Motyw i układ

Karta używa zmiennych motywu Home Assistant (`--primary-text-color`, `--card-background-color`, `--secondary-background-color`, itd.), więc reaguje na zmianę motywu bez przeładowania. Zasilanie ma opis i akcent pomarańczowy, a powrót opis i akcent niebieski. Układ przechodzi do jednej kolumny przy małej szerokości, bez poziomego przewijania.

## Instalacja ręczna

Pobierz `HA_Temperature_view.js` z katalogu `dist/` albo z zasobów GitHub Release i umieść go np. w `<config>/www/dom-heat-card/`. Następnie dodaj zasób `/local/dom-heat-card/HA_Temperature_view.js` jako moduł JavaScript w ustawieniach dashboardu i użyj konfiguracji z tego README.

## Rozwój i lokalny podgląd

```sh
npm ci
npm run check
npm test
npm run build
npm run dev
```

Podgląd `demo/index.html` renderuje oba układy i przełącznik jasnego/ciemnego motywu. Jest to kontrola wyglądu bez działającej instancji Home Assistant; integrację z prawdziwym selektorem encji i oknem more-info należy sprawdzić w HA po instalacji.

Workflow CI sprawdza typy, testy i build. Tag `v*` buduje kartę i załącza `dist/HA_Temperature_view.js` do GitHub Release. Przed publikacją ustaw opis oraz tematy repozytorium w GitHub; nie ma potrzeby tworzyć integracji HA.
