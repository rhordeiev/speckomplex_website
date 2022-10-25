<template>
  <div class="objects-page">
    <h1>ОБ'ЄКТИ</h1>
    <div class="2018-objects">
      <h2>2018:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign1" class="list-element-sign" @click="toggle(1)">+</div>
            <h3>Мобільний каток, м. Берлін, Німеччина</h3>
          </div>
          <div id="listElem1" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлений щит диспетчеризації на базі контоллера ТМ Certa Spider;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; на комп'ютер АРМ встановлена Scada-система Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign2" class="list-element-sign" @click="toggle(2)">+</div>
            <h3>Житловий будинок з підземним паркінгом, вул. М. Островського 48/50, м Київ.</h3>
          </div>
          <div id="listElem2" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлений щит диспетчеризації на базі контоллера ТМ Certa Spider;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; на комп'ютер АРМ встановлена Scada-система Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign3" class="list-element-sign" @click="toggle(3)">+</div>
            <h3>Текстильний цех (3,4 черги) по вул. Червоноткацькій, г. Киев</h3>
          </div>
          <div id="listElem3" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики на базі контоллера ТМ Certa Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; зроблені пусконалагоджувальні роботи Scada-системи Wheel ТМ Certa;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign4" class="list-element-sign" @click="toggle(4)">+</div>
            <h3>Офіс компанії JOOBLE. вул. Костянтинівська 71, м. Киев</h3>
          </div>
          <div id="listElem4" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація системи вентиляції та кондиціонування;</li>
              <li>&mdash; розроблений розділ проєкту електрифікації системи вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa;</li>
              <li>&mdash; виготовлені силові щити;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign5" class="list-element-sign" @click="toggle(5)">+</div>
            <h3>Пивоварня. вул. Бориспільська, м. Київ</h3>
          </div>
          <div id="listElem5" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проекту автоматизації технологічних процесів;</li>
              <li>&mdash; поставка контролерів ТМ Certa;</li>
              <li>&mdash; поставка польового обладнання;</li>
              <li>&mdash; шеф-монтаж;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; на комп'ютер АРМ встановлена Scada-система Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign6" class="list-element-sign" @click="toggle(6)">+</div>
            <h3>Cinema City. Льодовий каток м.Беер-Шева, Ізраїль</h3>
          </div>
          <div id="listElem6" class="list-element-inner-text">
            <ul>
              <li>&mdash; Здійснено постачання:</li>
              <li>
                <ul>
                  <li>&mdash; щити автоматики і диспетчеризації;</li>
                  <li>&mdash; польове обладнання.</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign7" class="list-element-sign" @click="toggle(7)">+</div>
            <h3>Мобільні катки, Німеччина</h3>
          </div>
          <div id="listElem7" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації на базі контоллера ТМ Certa ATOM-20;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; на комп'ютер АРМ встановлена Scada-система Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign8" class="list-element-sign" @click="toggle(8)">+</div>
            <h3>Мобільні катки, Італія.</h3>
          </div>
          <div id="listElem8" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації на базі контоллера ТМ Certa ATOM-20;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; на комп'ютер АРМ встановлена Scada-система Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign9" class="list-element-sign" @click="toggle(9)">+</div>
            <h3>Дизель генератор. GSM-сигналізація. м. Полтава.</h3>
          </div>
          <div id="listElem9" class="list-element-inner-text">
            <ul>
              <li>&mdash; поставку комплекту охоронної GSM-сигналізації;</li>
              <li>&mdash; монтажні роботи систем сигналізації;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням генератора в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2017-objects">
      <h2>2017:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign12" class="list-element-sign" @click="toggle(12)">+</div>
            <h3>Глобинський м'ясокомбінат. Біогазовоелектро-теплогенеруюча станція, м. Глобине</h3>
          </div>
          <div id="listElem12" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений двохстадійний розділ проєкту диспетчеризація та автоматизація системи вентиляції
                та кондиціювання біогазовоелектро-теплогенеруючої станції.</li>
              <li>&mdash; розроблений двохстадійний розділ проєкту диспетчеризація і автоматизація технологічного
                обладнання біогазовоелектро-теплогенеруючої станції.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign13" class="list-element-sign" @click="toggle(13)">+</div>
            <h3>Snow Town & The Rink. Harbor Pattaya. Льодовий каток і сніжна кімната м.Паттайя, Таїланд</h3>
          </div>
          <div id="listElem13" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання</li>
              <li>&mdash; системи холодопостачання льодового поля та снігової кімнати;</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів Carel;</li>
              <li>&mdash; шеф-монтаж;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign14" class="list-element-sign" @click="toggle(14)">+</div>
            <h3>Київмедпрепарат. Система сигналізації і смс оповіщення в аптечних складах по вул. Чистяківська, 7/33,
              м.Київ</h3>
          </div>
          <div id="listElem14" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту диспетчеризації;</li>
              <li>&mdash; виготовлені щити диспетчеризації на базі контролерів TM Certa;</li>
              <li>&mdash; монтаж;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в
                експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign15" class="list-element-sign" @click="toggle(15)">+</div>
            <h3>Empire Ice Skating Rink. Льодовий каток м.Петалінг-Джая, Малайзія</h3>
          </div>
          <div id="listElem15" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання</li>
              <li>&mdash; системи холодопостачання льодового поля;</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів Carel;</li>
              <li>&mdash; монтаж;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign16" class="list-element-sign" @click="toggle(16)">+</div>
            <h3>Транспортабельна твердопаливна котельня (0,2 МВт)</h3>
          </div>
          <div id="listElem16" class="list-element-inner-text">
            <ul>
              <li>&mdash; щити автоматики на базі контролера ТМ Certa Simplex 300;</li>
              <li>&mdash; датчики;</li>
              <li>&mdash; силовий щит, АВР.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2016-objects">
      <h2>2016:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign26" class="list-element-sign" @click="toggle(26)">+</div>
            <h3>Супермаркет "Сільпо" по пр. Правди, м. Київ</h3>
          </div>
          <div id="listElem26" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 200, Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign27" class="list-element-sign" @click="toggle(27)">+</div>
            <h3>ТЦ "Орнамент" по пр. Правди, м. Київ</h3>
          </div>
          <div id="listElem27" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign28" class="list-element-sign" @click="toggle(28)">+</div>
            <h3>УкрСиббанк по вул. Андріївська, буд.2 / 12, Святошинського р-ну, м. Київ</h3>
          </div>
          <div id="listElem28" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлений щит диспетчеризації та автоматизації на базі контроллеа Сarel;</li>
              <li>&mdash; шеф-монтаж;</li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign29" class="list-element-sign" @click="toggle(29)">+</div>
            <h3>Фармацевтичний завод Астрафарм, м.Новоград-Волинський</h3>
          </div>
          <div id="listElem29" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign30" class="list-element-sign" @click="toggle(30)">+</div>
            <h3>Текстильний цех (1 черга) по вул. Червоноткацькій, м. Київ</h3>
          </div>
          <div id="listElem30" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign31" class="list-element-sign" @click="toggle(31)">+</div>
            <h3>Кафе на Куриневському ринку, м. Київ.м. Київ</h3>
          </div>
          <div id="listElem31" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 200;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2015-objects">
      <h2>2015:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign51" class="list-element-sign" @click="toggle(51)">+</div>
            <h3>ТЦ "Модуль" м. Буча</h3>
          </div>
          <div id="listElem51" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту модернізації автоматизації систем вентиляції та кондиціонування.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign52" class="list-element-sign" @click="toggle(52)">+</div>
            <h3>Фітнес-центр по вул. Бол. Кільцева, 4-П, Петропавловськ-Борщагівської сільської ради,
              Києво-Cвятошінского р-ну, Київської обл.</h3>
          </div>
          <div id="listElem52" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту:</li>
              <li>
                <ul>
                  <li>&mdash; автоматизація інженерного обладнання систем вентиляції та кондиціонування;</li>
                  <li>&mdash; диспетчеризація інженерного устаткування:</li>
                  <li>
                    <ul>
                      <li>&mdash; систем вентиляції та кондиціонування;</li>
                      <li>&mdash; басейна.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 200, Simplex 300;</li>
              <li>&mdash; виготовлені щити диспетчеризації на базі пристроїв введення / виводу Certa Mio;</li>
              <li>&mdash; роботи по монтажу:</li>
              <ul>
                <li>&mdash; кабельних трас;</li>
                <li>&mdash; щитів автоматики і диспетчеризації;</li>
                <li>&mdash; датчиків і т.д.</li>
              </ul>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; на АРМ диспетчерської встановлений комп'ютер з Scada-системою Wheel ТМ Certa, зроблені
                пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign53" class="list-element-sign" @click="toggle(53)">+</div>
            <h3>Газова котельня (1,6 МВт) 25-ти поверхового житлового будинку по пр. Науки, 55-а, м. Київ</h3>
          </div>
          <div id="listElem53" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики на базі контролерів ТМ Certa Simplex 200;</li>
              <li>&mdash; виготовлені силові щити, АВР;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; пусконаладка 3-х газових котлів ICI CALDAIE і автоматики;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем
                в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign54" class="list-element-sign" @click="toggle(54)">+</div>
            <h3>Газова котельня (1,55 МВт) 25-ти поверхового житлового будинку по пр. Науки, 58, м. Київ</h3>
          </div>
          <div id="listElem54" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики на базі контролерів ТМ Certa Simplex 300;</li>
              <li>&mdash; виготовлені силові щити, АВР;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; пусконаладка 3-х газових котлів ICI CALDAIE і автоматики;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем
                в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign55" class="list-element-sign" @click="toggle(55)">+</div>
            <h3>Дахова газова котельня (1,9 МВт) житлового будинку по вул. Петропавлівська, 40, м. Київ</h3>
          </div>
          <div id="listElem55" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики на базі контролерів ТМ Certa Simplex 300;</li>
              <li>&mdash; виготовлені силові щити, АВР;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign56" class="list-element-sign" @click="toggle(56)">+</div>
            <h3>ІТП житлового будинку по вул. Петропавлівська, 40, м. Київ</h3>
          </div>
          <div id="listElem56" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики на базі контролерів ТМ Certa Simplex 300;</li>
              <li>&mdash; виготовлені силові щити, АВР;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2014-objects">
      <h2>2014:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign59" class="list-element-sign" @click="toggle(59)">+</div>
            <h3>ТРЦ "Depo't" по бул. Шевченко, 385, м. Черкаси</h3>
          </div>
          <div id="listElem59" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контоллеров ТМ Certa Simplex 200, Simplex 300;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign60" class="list-element-sign" @click="toggle(60)">+</div>
            <h3>Льодовий палац "Краків Арена" на 22 000 глядацьких місць в м. Краків, Польща</h3>
          </div>
          <div id="listElem60" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання систем</li>
              <li>&mdash; вентиляції та кондиціонування, системи холодопостачання льодового поля;</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів Carel;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; встановлений щит з панельним комп'ютером з Scada-системою Wheel ТМ Certa, зроблені
                пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign61" class="list-element-sign" @click="toggle(61)">+</div>
            <h3>Льодове поле і сніжна кімната в TРЦ «Aeon Mall Phnom Penh» в м. Пномпень, Камбоджа.</h3>
          </div>
          <div id="listElem61" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання систем</li>
              <li>&mdash; вентиляції та кондиціонування, системи холодопостачання льодового поля;</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів Carel;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; встановлений щит з панельним комп'ютером з Scada-системою Wheel ТМ Certa, зроблені
                пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign62" class="list-element-sign" @click="toggle(62)">+</div>
            <h3>Житловий комплекс будинку з підземним паркінгом по вул. Лютеранській, 14-в, в Печерському р-ні,
              м. Київ</h3>
          </div>
          <div id="listElem62" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація інженерного обладнання системи холодопостачання.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign63" class="list-element-sign" @click="toggle(63)">+</div>
            <h3>Льодова арена на 3 000 глядацьких місць в Медеуського районі м. Алмати, Казахстан</h3>
          </div>
          <div id="listElem63" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проекту автоматизація і диспетчеризація інженерного обладнання
                систем вентиляції та кондиціонування, системи холодопостачання льодового поля.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign64" class="list-element-sign" @click="toggle(64)">+</div>
            <h3>Логістичний центр, с. Калинівка, Броварського р-ну, Київської обл</h3>
          </div>
          <div id="listElem64" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації систем вентиляції та кондиціонування;</li>
              <li>&mdash; виготовлені щити автоматики на базі контролерів Danfoss MCX;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2013-objects">
      <h2>2013:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign66" class="list-element-sign" @click="toggle(66)">+</div>
            <h3>Льодовий каток в ТРК «Меганом» по вул. Євпаторійське шосе, 8, м. Сімфеорополь</h3>
          </div>
          <div id="listElem66" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання систем</li>
              <li>&mdash; вентиляції та кондиціонування, системи холодопостачання льодового поля.</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів ТМ Certa Simplex 200;</li>
              <li>&mdash; роботи по монтажу: кабельних трас і щитів автоматики і диспетчеризації.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign67" class="list-element-sign" @click="toggle(67)">+</div>
            <h3>ТРЦ "Нікольський" по вул. Пушкінській, 2, м. Харків</h3>
          </div>
          <div id="listElem67" class="list-element-inner-text">
            <ul>
              <li>&mdash; автоматизації системи загальної вентиляції і кондиціонування;</li>
              <li>&mdash; автоматизація дренажних приямків;</li>
              <li>&mdash; диспетчеризація інженерного устаткування.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign68" class="list-element-sign" @click="toggle(68)">+</div>
            <h3>Комплекс обслуговування автомобільного транспорту в смт. Козин, Обухівського р-ну, Київської обл</h3>
          </div>
          <div id="listElem68" class="list-element-inner-text">
            <ul>
              <li>Автоматизація систем загальної системи вентиляції та повітряного опалення:</li>
              <li>
                <ul>
                  <li>&mdash; виготовлені щити автоматики на базі контролерів ТМ CERTA Simplex 200;</li>
                  <li>&mdash; роботи по монтажу: кабельних трас і щитів автоматики;</li>
                  <li>&mdash; пуско-налагоджувальні роботи;</li>
                  <li>&mdash; пусконалагоджувальні роботи газових пальників;</li>
                  <li>&mdash; виконавча документація.</li>
                </ul>
              </li>
              <li>Автоматизація теплових завіс:</li>
              <li>
                <ul>
                  <li>&mdash; виготовлені щити управління;</li>
                  <li>&mdash; роботи по монтажу: кабельних трас і щитів;</li>
                  <li>&mdash; пуско-налагоджувальні роботи;</li>
                  <li>&mdash; виконавча документація.</li>
                </ul>
              </li>
              <li>Систему загазованості:</li>
              <li>
                <ul>
                  <li>&mdash; роботи по монтажу: кабельних трас і сигналізаторів;</li>
                  <li>&mdash; пуско-налагоджувальні роботи;</li>
                  <li>&mdash; виконавча документація.</li>
                </ul>
              </li>
              <li>Проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign69" class="list-element-sign" @click="toggle(69)">+</div>
            <h3>Цех фарбування і сушки ПрАТ "Броварський меблевий комбінат", м. Бровари</h3>
          </div>
          <div id="listElem69" class="list-element-inner-text">
            <ul>
              <li>&mdash; згідно проєкту виготовлені щити автоматизації;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign70" class="list-element-sign" @click="toggle(70)">+</div>
            <h3>Вища Рада Юстиції - Адміністративна будівля по вул. Студентській, 12a, м. Київ</h3>
          </div>
          <div id="listElem70" class="list-element-inner-text">
            <ul>
              <li>&mdash; згідно проєкту виготовлені щити автоматизації на базі контоллеров Danfoss MCX,
                ТМ Certa Simplex;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign71" class="list-element-sign" @click="toggle(71)">+</div>
            <h3>Спортивно-оздоровчий комплекс (з льодовою ареною) в м. Кизилорда, Казахстан.</h3>
          </div>
          <div id="listElem71" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проекту автоматизація і диспетчеризація інженерного обладнання</li>
              <li>&mdash; систем вентиляції та кондиціонування, системи холодопостачання льодового поля;</li>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів Carel;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; встановлений щит з панельним комп'ютером з Scada-системою Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2012-objects">
      <h2>2012:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign76" class="list-element-sign" @click="toggle(76)">+</div>
            <h3>Квартальна газова котельня (23.25 МВт) по вул. Кондратюка, 8, м. Київ</h3>
          </div>
          <div id="listElem76" class="list-element-inner-text">
            <ul>
              <li>&mdash; відповідно до розділу проєкту АТМ виготовлений щити автоматики на базі контролерів Логиконт;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign77" class="list-element-sign" @click="toggle(77)">+</div>
            <h3>УкрСиббанк по вул. Андріївська, буд.2 / 12, м. Київ.</h3>
          </div>
          <div id="listElem77" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити автоматики і диспетчеризації на базі контролерів ТМ Certa Simplex 200;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; налагодження встановленої раніше Scada-системи Wheel ТМ Certa;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign78" class="list-element-sign" @click="toggle(78)">+</div>
            <h3>Гіпермаркет "Ашан", м.Донецьк.</h3>
          </div>
          <div id="listElem78" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизація і диспетчеризація системи холодопостачання льодового поля</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign79" class="list-element-sign" @click="toggle(79)">+</div>
            <h3>Льодовий каток «Метеор» в ТРЦ «Фабрика», по вул. Залаегерсег, 18, м. Херсон</h3>
          </div>
          <div id="listElem79" class="list-element-inner-text"></div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign80" class="list-element-sign" @click="toggle(80)">+</div>
            <h3>ТРЦ "Лівобережний" по вул. Марини Раскової 2а, м. Київ</h3>
          </div>
          <div id="listElem80" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проекту диспетчеризація інженерного устаткування.</li>
              <li>&mdash; виготовлені щити диспетчеризації;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; на АРМ диспетчерської встановлений комп'ютер з Scada-системою Wheel ТМ Certa,
                зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2011-objects">
      <h2>2011:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign84" class="list-element-sign" @click="toggle(84)">+</div>
            <h3>Льодовий каток в ТРЦ "Донецьк-СІТІ", м. Донецк</h3>
          </div>
          <div id="listElem84" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; на АРМ диспетчерської встановлений комп'ютер з Scada-системою Wheel ТМ Certa,
                зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign85" class="list-element-sign" @click="toggle(85)">+</div>
            <h3>УкрСиббанк по вул. Андріївська, буд.2 / 12, м. Київ</h3>
          </div>
          <div id="listElem85" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проекту автоматизація і диспетчеризація систем вентиляції та кондиціонування</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign86" class="list-element-sign" @click="toggle(86)">+</div>
            <h3>УкрСиббанк по вул. Ф.Пушиної, д.21, Святошинського р-ну, м. Київ</h3>
          </div>
          <div id="listElem86" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації та автоматизації на базі контролерів Сarel;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; на АРМ диспетчерської встановлений комп'ютер з Scada-системою Wheel ТМ Certa,
                зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign87" class="list-element-sign" @click="toggle(87)">+</div>
            <h3>Житловий комплекс з підземним паркінгом по вул. Раїси Окіпноі, 16-16А, в Дніпровському р-ні,
              м.Київа</h3>
          </div>
          <div id="listElem87" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації та автоматизації на базі контролерів Сarel;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2010-objects">
      <h2>2010:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign89" class="list-element-sign" @click="toggle(89)">+</div>
            <h3>Виробнича база ДП «ВІННЕР ІМПОРТС-АВТО» в с. Капітанівка, Києво-Святошинського р-ну</h3>
          </div>
          <div id="listElem89" class="list-element-inner-text">
            <ul>
              <li>&mdash; виготовлені щити диспетчеризації освітлення на базі контролерів "Раут-Автоматик";</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign90" class="list-element-sign" @click="toggle(90)">+</div>
            <h3>Льодовий комплекс палацу спорту "Казахстан", м.Астана, Казахстан</h3>
          </div>
          <div id="listElem90" class="list-element-inner-text">
            <ul>
              <li>розроблений розділ проєкту автоматизація і диспетчеризація інженерного обладнання</li>
              <li>систем вентиляції та кондиціонування, системи холодопостачання льодового поля.</li>
              <li>виготовлені щити автоматики і диспетчеризації;</li>
              <li>роботи по монтажу:</li>
              <li>
                <ul>
                  <li>кабельних трас;</li>
                  <li>щитів автоматики і диспетчеризації;</li>
                  <li>датчиків і т.д.</li>
                </ul>
              </li>
              <li>пуско-налагоджувальні роботи;</li>
              <li>виконавча документація;</li>
              <li>встановлено панельний комп'ютер з Scada-системою Wheel ТМ Certa, зроблені пусконалагоджувальні роботи;</li>
              <li>проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2009-objects">
      <h2>2009:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign91" class="list-element-sign" @click="toggle(91)">+</div>
            <h3>Міжнародний аеропорт "Бориспіль", термінал "B"</h3>
          </div>
          <div id="listElem91" class="list-element-inner-text">
            <ul>
              <li>&mdash; система диспетчеризації чилера в будівлі перонних бригад;</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign92" class="list-element-sign" @click="toggle(92)">+</div>
            <h3>Реконструкція приміщень під будівлю банку Львівської філії ВАТ "Укрексімбанк" на
              пл. Адама Міцкевича, 4</h3>
          </div>
          <div id="listElem92" class="list-element-inner-text">
            <ul>
              <li>&mdash; система диспетчеризації інженерного обладнання;</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="2008-objects">
      <h2>2008:</h2>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign93" class="list-element-sign" @click="toggle(93)">+</div>
            <h3>Комплекс міжнародного логістичного партнерства «МЛП Чайка» с. Чайки</h3>
          </div>
          <div id="listElem93" class="list-element-inner-text">
            <ul>
              <li>&mdash; систему автоматизації та диспетчеризації інженерного обладнання;</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign94" class="list-element-sign" @click="toggle(94)">+</div>
            <h3>Виробнича база ДП «ВІННЕР ІМПОРТС-АВТО» в с. Капітанівка, Києво-Святошинського р-ну</h3>
          </div>
          <div id="listElem94" class="list-element-inner-text">
            <ul>
              <li>&mdash; розроблений розділ проєкту автоматизації та диспетчеризації
                систем інженерного обладнання, освітлення;</li>
              <li>&mdash; виготовлені щити диспетчеризації та автоматизації;</li>
              <li>&mdash; роботи по монтажу:</li>
              <li>
                <ul>
                  <li>&mdash; кабельних трас;</li>
                  <li>&mdash; щитів автоматики і диспетчеризації;</li>
                  <li>&mdash; датчиків і т.д.</li>
                </ul>
              </li>
              <li>&mdash; пуско-налагоджувальні роботи;</li>
              <li>&mdash; виконавча документація;</li>
              <li>&mdash; на АРМ диспетчерської встановлений комп'ютер з Scada-системою Wheel ТМ Certa,
                зроблені пусконалагоджувальні роботи;</li>
              <li>&mdash; проведено інструктаж і навчання обслуговуючого персоналу перед введенням систем в
                експлуатацію.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign95" class="list-element-sign" @click="toggle(95)">+</div>
            <h3>Сучасний стадіон під куполом, с. Щасливе</h3>
          </div>
          <div id="listElem95" class="list-element-inner-text">
            <ul>
              <li>&mdash; автоматизація системи вентиляції для підтримки постійного тиску в куполі.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign96" class="list-element-sign" @click="toggle(96)">+</div>
            <h3>Фітнес клуб «Олімп», м. Київ, вул. Кулібіна 11</h3>
          </div>
          <div id="listElem96" class="list-element-inner-text">
            <ul>
              <li>&mdash; система вентиляції повітряно опірної конструкції.</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <div class="list-element-header">
            <div id="listElemSign97" class="list-element-sign" @click="toggle(97)">+</div>
            <h3>Завод "Сесвандерхаве" c.Гоголів</h3>
          </div>
          <div id="listElem97" class="list-element-inner-text">
            <ul>
              <li>&mdash; система автоматизації вентиляційного та опалювального обладнання.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ObjectsPage",
  methods: {
    toggle(num) {
      let listElemId = document.getElementById("listElem" + num).style
      let listElemSignId = document.getElementById("listElemSign" + num)
      if (listElemId.display === "none") {
        listElemId.display = "block";
        listElemSignId.innerHTML = '&ndash;';
      }
      else {
        listElemId.display = "none";
        listElemSignId.innerHTML = '+';
      }
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}
.list-element-header {
  display: flex;
  align-items: center;
}
.list-element-header h3 {
  text-align: left;
  margin-left: 1%;
}
.list-element-sign {
  border: 0.2rem solid red;
  text-align: center;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}
li {
  list-style-type: none;
  color: black;
  font-style: normal;
}
.list-element-inner-text{
  display: none;
}
.list-element-inner-text li{
  color: #717171;
  font-style: italic;
}
</style>