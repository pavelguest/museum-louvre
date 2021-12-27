
import './ts/slider';
import './scss/main.scss';

import './ts/ButtonsNav';
import './ts/Pages';
import './ts/CreateElement';
import './ts/ButtonsDecor';
import './ts/Filters';
import './ts/OtherFilters';
import './ts/Sort';
import './ts/SaveFiltersDecor';
import './ts/ButtonsTree';
import './ts/RenderDecor';
import './ts/FilterDecor';
import './ts/RenderSnow';
import './ts/RenderGarland';
import './ts/DragDecors';
import './ts/SaveSettingsTree';

console.log(`
Самопроверка(200/220):
- Вёрстка страниц приложения и навигация между ними (30/30)
стартовая страница содержит название приложения и кнопку "Начать игру" или аналогичную. Выполняются требования к вёрстке(10/10)
на странице с ёлкой есть меню с настройками, слоты с добавленными в избранное игрушками, ёлка. Выполняются требования к вёрстке (10/10)
в header приложения есть навигация, которая позволяет с каждой страницы приложения перейти на две другие страницы (10/10)
- Меню с настройками (50/50)
выбрать один из нескольких (минимум 8) фонов (10/10)
выбрать одну из нескольких (минимум 4) ёлок (10/10)
включить/отключить падающий снег (10/10)
включить/отключить новогоднюю музыку (10/10)
выбранные настройки сохраняются в local storage и отображаются при перезагрузке страницы. Если музыка сохранилась включённой, она начинает играть при первом клике. Есть кнопка сброса настроек, которая очищает local storage (10/10)
- Гирлянда (40/40)
добавить на ёлку мерцающую разноцветную гирлянду (20/20)
выбрать один из нескольких (минимум 4) цветов лампочек гирлянды или оставить её разноцветной(10/10)
внешний вид гирлянды соответствует предложенному образцу или является его улучшенной версией (10/10)
- Игрушки в избранном (80/80)
в слотах находятся игрушки, которые были добавлены в избранное на странице с игрушками (10/10)
если в избранное не была добавлена ни одна игрушка, в слотах отображаются первые 20 игрушек коллекции исходных данных (10/10)
игрушки из слотов с игрушками можно перетянуть на ёлку используя drag and drop (10/10)
если в процессе перетягивания игрушку отпускают за пределами ёлки, она возвращается в свой слот (10/10)
повешенные на ёлку игрушки можно перетягивать в пределах ёлки (10/10)
повешенные на ёлку игрушки можно снимать с ёлки, при этом они возвращаются в свой слот (10/10)
возле слота с каждой игрушкой указывается количество игрушек в слоте равное количеству экземпляров игрушки в массиве с исходными данными (10/10)
когда игрушку "вешают на ёлку" количество игрушек в слоте уменьшается, когда игрушку "снимают с ёлки", количество игрушек в слоте увеличивается, когда все экземпляры игрушки помещаются на ёлку, отображается пустой слот (10/10)
Дополнительный функционал на выбор (0/20)

Спасибо за проверку! Удачи!
`)
