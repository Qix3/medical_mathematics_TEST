// ============================================================
// ПОЛНЫЙ МАССИВ ВОПРОСОВ (200 задач по медицинской математике)
// Правильные ответы (отмечены знаком # в исходном файле) — индекс 0
// ============================================================

const QUESTIONS = [
    { q: "Скорость изменения концентрации через 3 часа. C(t) = 5t² - 2t", a: ["28 мг/л·ч", "65 мг/л·ч", "87 мг/л·ч", "13 мг/л·ч", "15 мг/л·ч"], c: 0 },
    { q: "Система уравнений для распределения препарата: общее количество 120 мг, в печени в 2 раза больше, чем в почках, в крови на 20 мг меньше, чем в печени", a: ["{x+y+z=120; y=2z; x=y-20}", "{x+y+z=12; y=z; x=y-20}", "{x+y+z=120; y=5z; x=y-20}", "{x+y+z=120; y=3z; x=y+20}", "{x+z=12; y=7z; x=y-2}"], c: 0 },
    { q: "Распределение препарата между органами (решение системы x+y+z=120; y=2z; x=y-20)", a: ["кровь-36мг, печень-56мг, почки-28мг", "кровь-30мг, печень-56мг, почки-28мг", "кровь-60мг, печень-40мг, почки-20мг", "кровь-36мг, печень-56мг, почки-25мг", "57мг, 25мг"], c: 0 },
    { q: "Баланс ионов в плазме крови: сумма 300 ммоль/л, натрия в 5 раз больше калия, хлора на 20 меньше натрия", a: ["{x+y+z=300; x=5y; z=y-20}", "{x+y+z=303; y=2z; x=y-20}", "{x+y+z=305; y=5z; x=y-20}", "{x+y+z=120; y=2z; x=y-20}", "{x+y+z=303; y=2z; x=y-20}"], c: 0 },
    { q: "Распределение пациентов: всего 180, хирургических на 20 больше терапевтических, кардиологических в 2 раза меньше хирургических", a: ["{x+y+z=180; y=x+20; z=y/2}", "{x+y+z=180; y=30z; x=y-20}", "{x+y+z=180; x=2y; z=y+20}", "{x+y+z=180; y=2z; x=y-20}", "{x+y+z=180; y=2z; x=y+20}"], c: 0 },
    { q: "Оптимальное распределение коек (решение системы предыдущей задачи)", a: ["терапия-60, хирургия-80, кардиология-40", "терапия-30, хирургия-70, кардиология-80", "терапия-60, хирургия-60, кардиология-60", "терапия-65, хирургия-70, кардиология-40", "терапия-10, хирургия-30, кардиология-50"], c: 0 },
    { q: "Система для препаратов A, B, C: сумма 90 мг, B в 2 раза больше A, C на 10 мг меньше A", a: ["{x+y+z=90; y=2x; z=x-10}", "{x+y+z=90; y=20z; x=y-20}", "{x+y+z=100; x=2y; z=y+20}", "{x+y+z=180; y=2z; x=y-20}", "{x+y+z=90; y=40z; x=y-10}"], c: 0 },
    { q: "Суточные дозы препаратов (решение предыдущей системы)", a: ["А-25, В-50, С-15", "А-50, В-50, С-80", "А-70, В-60, С-50", "А-60, В-70, С-50", "А-70, В-60, С-10"], c: 0 },
    { q: "Смешивание 40% и 10% растворов → 800г 21,25% раствора. Система уравнений", a: ["{x·0.4+y·0.1=800·0.2125; x·0.6+y·0.9=800·0.7875}", "{x·0.1+y·0.4=800·0.2125; x·0.6+y·0.9=800·0.7875}", "{x·0.6+y·0.1=800·21.25; x·0.4+y·0.9=800·78.75}", "{x·0.6+y·0.1=80·21.25; x·0.4+y·0.9=80·78.75}", "{x·0.4+y·0.15=800·0.2125; x·0.6+y·0.85=800·0.7875}"], c: 0 },
    { q: "Количество 40% и 10% растворов (решение предыдущей задачи)", a: ["300мг и 500мг", "650мг и 150мг", "450мг и 350мг", "150мг и 700мг", "630мг и 150мг"], c: 0 },
    { q: "Смешивание 30% и 10% → 600г 15% раствора. Количество каждого", a: ["150мг и 450мг", "300мг и 300мг", "400мг и 200мг", "100мг и 500мг", "200мг и 500мг"], c: 0 },
    { q: "Функция интенсивности воспаления — правильная запись производной", a: ["X'(t)=dX/dt", "I(t)=t²-2t", "X'(t)=dУ/dt", "I(t)=t²+2t", "X'(t)=dz/dt"], c: 0 },
    { q: "Максимум интенсивности I(t) = -t² + 6t", a: ["t=3ч", "t=6ч", "t=16ч", "t=12ч", "t=8ч"], c: 0 },
    { q: "Дифференциальное уравнение dC/dt = -0,5C. Решение", a: ["C(t)=C₀e^(-0,5t)", "C(t)=C₀e^(-0,2t)", "C(t)=C₀e^(-0,6t)", "C(t)=C₀e^(0,8t)", "C(t)=C₀e^(-t)"], c: 0 },
    { q: "Первая и вторая производные S(t)=t³-3t²", a: ["S'(t)=3t²-6t, S''(t)=6t-6", "S(t)=t²-2t", "S''(t)=6t-6", "S'(t)=dX/dt", "S'(t)=dz/dt"], c: 0 },
    { q: "Критические точки F(t)=t³-3t²+9t", a: ["t=1, t=3", "t=0, t=4", "t=2, t=0", "t=0, t=0", "t=2, t=4"], c: 0 },
    { q: "Что представляет собой x(t) в дифференциальном уравнении?", a: ["биологическая переменная (численность популяции, концентрация, масса)", "функция, описывающая скорость изменения системы", "функция, описывающая популяцию", "время", "функция, описывающая время"], c: 0 },
    { q: "Убыль лекарственного вещества описывается уравнением", a: ["dC/dt = -kC", "dx/dt = f(x)", "dN/dt = rN/K", "dx/dt = -5x", "S(t)=t²-2t"], c: 0 },
    { q: "Численность бактерий через 12 часов (удваивается каждые 3 часа, начально 500)", a: ["8000", "3000", "7000", "1000", "5000"], c: 0 },
    { q: "N(t)=N₀e^(kt), N₀=100, k=0,05, t=10 лет", a: ["165", "306", "700", "102", "504"], c: 0 },
    { q: "Дифференциальное уравнение выведения препарата первого порядка", a: ["dx/dt = -kС", "dС/dt = 2k", "dx/dt = kС²+3", "dx/dt = k-4t", "dx/dt = k+4t"], c: 0 },
    { q: "Физический смысл параметра k в dx/dt = -kС", a: ["коэффициент элиминации препарата", "дозу препарата", "скорость введения", "объём распределения", "физиология пациента"], c: 0 },
    { q: "Общий вид модели с одним дифференциальным уравнением первого порядка", a: ["dx/dt = f(x,t)", "d²x/dt² = f(x)", "ax - by = c", "x = f(t)", "ax + by = c"], c: 0 },
    { q: "Стационарное состояние модели", a: ["значение переменной, при котором dx/dt = 0", "значение решения при t=0", "момент времени, когда рост максимален", "любое постоянное решение", "значение решения при t=1"], c: 0 },
    { q: "Вероятность заражения ровно один раз из трёх при p=0,2", a: ["0,384", "0,095", "0,513", "0,209", "0,101"], c: 0 },
    { q: "Распределение для редких мутаций", a: ["пуассоновское", "нормальное", "равномерное", "биномиальное", "обычное"], c: 0 },
    { q: "Что характеризует стандартное отклонение?", a: ["меру разброса значений относительно среднего", "среднее значение показателя", "максимальное значение", "вероятность отклонения", "вероятность события"], c: 0 },
    { q: "Метод для определения вероятности заболевания при положительном тесте", a: ["формула Байеса", "метод наименьших квадратов", "биномиальное распределение", "закон больших чисел", "обычное распределение"], c: 0 },
    { q: "Когда доля ложноположительных результатов возрастает?", a: ["при низкой распространённости", "высокой распространённости", "средней распространённости", "не зависит от распространённости", "зависит от распространённости"], c: 0 },
    { q: "Вероятность 5 девочек и 2 мальчиков из 7 детей", a: ["P = 5/16", "P = 25/16", "P = 17/16", "P = 19/16", "P = 18/7"], c: 0 },
    { q: "Конечная масса раствора после выпаривания: 800г 10% → 16%", a: ["500г", "600г", "800г", "200г", "700г"], c: 0 },
    { q: "Вероятность выбора белого и голубого халатов (5 белых, 7 зелёных, 8 голубых)", a: ["0,21", "0,82", "0,64", "0,18", "0,28"], c: 0 },
    { q: "Вероятность хотя бы одного учебника анатомии из 3 книг (5 из 15)", a: ["0,736", "1,801", "0,603", "0,205", "0,327"], c: 0 },
    { q: "Вероятность, что 6 из 8 врачей останутся здоровыми (p=0,2)", a: ["0,290", "1,204", "0,802", "1,606", "0,908"], c: 0 },
    { q: "Вероятность вызова скорой двумя поликлиниками из 4 (p=0,6)", a: ["0,345", "0,803", "1,606", "1,467", "0,457"], c: 0 },
    { q: "Математическое ожидание изменения веса", a: ["5", "26", "64", "12", "11"], c: 0 },
    { q: "Дисперсия изменения веса", a: ["3325", "6064", "8026", "9207", "5432"], c: 0 },
    { q: "Среднее квадратичное отклонение изменения веса", a: ["63", "127", "85", "58", "133"], c: 0 },
    { q: "Математическое ожидание числа разрушенных таблеток (n=100, p=0,03)", a: ["3", "8", "6", "12", "13"], c: 0 },
    { q: "Дисперсия числа разрушенных таблеток", a: ["2,94", "4,86", "2,91", "3,12", "3,118"], c: 0 },
    { q: "Среднее квадратичное отклонение числа разрушенных таблеток", a: ["1,75", "1,8", "1,9", "3,2", "2,25"], c: 0 },
    { q: "Закон сложения вероятностей для несовместных событий", a: ["Р(А+В)=Р(А)+Р(В)", "Р(А+В)=Р(А)Р(В)", "Р(А+В)=Р(А)-Р(В)", "Р(А+В)=Р(А)/Р(В)", "Р(АВ)=Р(А)+Р(В)"], c: 0 },
    { q: "Формула сложения вероятностей для совместных событий", a: ["Р(А+В)=Р(А)+Р(В)-Р(АВ)", "Р(АВ)=Р(А)+Р(В)", "Р(А+В)=Р(А)+Р(В)", "Р(А+В)=Р(А)+Р(В)/Р(АВ)", "Р(А+В)=Р(А)+Р(В)+Р(АВ)"], c: 0 },
    { q: "Определение дифференциального уравнения", a: ["F(x,y,y',y'',...,y^(n))=0", "F(x,y)=0", "F(x,y')=0", "F(y)=0", "δ(x)=√M(x)"], c: 0 },
    { q: "Среднеквадратичное отклонение случайной величины", a: ["δ(x)=√D(x)", "δ(x)=√S(x)", "δ(x)=√M(x)", "δ(x)=√M(x)-√D(x)", "F(x,y)=0"], c: 0 },
    { q: "Произведение вероятностей независимых событий", a: ["Р(АВ)=Р(А)·Р(В)", "Р(АВ)=Р(А)+Р(В)", "Р(АВ)=Р(А)/Р(В)", "Р(АВ)=Р(А)Р(В)-Р(АВ)", "F(x,y)=0"], c: 0 },
    { q: "Дисперсия случайной величины", a: ["D(X)=M(X²)-[M(X)]²", "D(X)=M(X²)+[M(X)]²", "D(X)=M(X²)", "D(X)=X²[M(X)]²", "F(x,y)=0"], c: 0 },
    { q: "Общее решение y'=4x³", a: ["y=x⁴+C", "y=4x⁴+C", "y=x³/3+C", "y=x³+C", "y=x⁴"], c: 0 },
    { q: "Математическое ожидание дискретной случайной величины", a: ["M(X)=x₁p₁+x₂p₂+...+xₙpₙ", "∑xᵢpᵢ", "M(X)=x₁p₁-x₂p₂-...-xₙpₙ", "M(X)=x₁p₁-x₂p₂+...+xₙpₙ", "F(x,y)=0"], c: 0 },
    { q: "Формула распределения Бернулли", a: ["Pₙ(m)=Cₙᵐ·pᵐ·q^(n-m)", "Pₙ(m)=Cₙᵐ·pᵐ·q^(n+m)", "Pₙ(m)=Cₙᵐ·pᵐ·qⁿ", "Pₙ(m)=Cₙᵐ·pᵐ·qᵐ", "M(X)=x₁p₁-...+"], c: 0 },
    { q: "Объём воды для разведения 0,5 кг хлорной извести до 10% раствора", a: ["5л", "13,5л", "10,2л", "9,4л", "5,5л"], c: 0 },
    { q: "Решение y'' - 3y' - 10y = 0", a: ["y=C₁e^(5x)+C₂e^(-2x)", "y=C₁e^(15x)+C₂e^(13x)", "y=(C₁+C₂)e^(12x)", "y=C₁e^(-0,9x)+C₂e^(1,5x)", "y=x³+C"], c: 0 },
    { q: "Объём крови в малом круге при массе 65 кг (объём крови 1/13 от массы)", a: ["1-1,25л", "2-2,5л", "4-4,5л", "6-6,5л", "8-8,5л"], c: 0 },
    { q: "Процент массы спинного мозга (72 кг, мозг 35 г)", a: ["0,048%", "0,049%", "0,25%", "0,67%", "0,55%"], c: 0 },
    { q: "Процент заполнения отделения (45 коек + 10 дополнительных)", a: ["122,2%", "131,9%", "191%", "165%", "132,5%"], c: 0 },
    { q: "Процент массы мозга новорождённого от взрослого (400г и 1370г)", a: ["29,2%", "35,5%", "70,7%", "40,3%", "85,3%"], c: 0 },
    { q: "Масса мышц на голову (70 кг, мышцы 40%, на верхние 30%)", a: ["1,3кг", "5,5кг", "3,1кг", "0,5кг", "0,7кг"], c: 0 },
    { q: "Масса мышц на туловище (70 кг, мышцы 40%, нижние 50%, верхние 30%)", a: ["5,6кг", "7кг", "5,8кг", "6,3кг", "5,9%"], c: 0 },
    { q: "На сколько процентов превышен расход (765г вместо 500г)", a: ["53%", "50%", "52%", "60%", "84%"], c: 0 },
    { q: "Хлорной извести при увеличении нормы на 150% (норма 0,5 кг)", a: ["0,75кг", "2,6кг", "4,2кг", "6,8кг", "0,77%"], c: 0 },
    { q: "Решение p'' - 10p' + 25p = 0", a: ["p=(C₁+C₂q)e^(5q)", "p=C₁e^q-C₂e^(-q)", "p=C₁e^(-q)+C₂e^(3q)", "p=C₁q+Ce^q", "p=(C₁-C₂q)e^(5q)"], c: 0 },
    { q: "Масса мышц верхних конечностей (75 кг, мышцы 40%, на верхние 25%)", a: ["7,5кг", "12,5кг", "10,2кг", "8,6кг", "7,7кг"], c: 0 },
    { q: "Решение y'' - 2y' + 10y = 0", a: ["y=e^x(A·cos3x+B·sin3x)", "y=C₁e^(-x)+C₂e^(3x)", "y=A·cos3x+B·sin3x", "y=A·cosx+B·sinx", "y=6cosx+3sinx"], c: 0 },
    { q: "Процент расхода салфеток (1 из 25 упаковок)", a: ["4%", "5%", "7%", "9%", "6%"], c: 0 },
    { q: "Решение y'' + 4y' = 0", a: ["y=C₁+C₂e^(-4x)", "y=C₁e^x", "y=C₁+e^x", "y=(C₂-C₃x)e^(2x)", "y=C₃x·e^(2x)"], c: 0 },
    { q: "Решение d²x/dt² - 4dx/dt + 4y = 0", a: ["x=(C₁+C₂t)e^(2t)", "y=C₁e^x", "x=(C₂+C₃x)e^(2t)", "x=C₁e^t", "y=C₁+e^x"], c: 0 },
    { q: "Общее количество ампул (2% брака = 5 штук)", a: ["250", "300", "505", "602"], c: 0 },
    { q: "Решение d²x/dt² + 3dx/dt - 4x = 0", a: ["x=C₁e^t+C₂e^(-4t)", "y=C₁e^x", "y=(C₂+C₃x)e^(2t)", "x=C₁e^t", "y=C₁+e^x"], c: 0 },
    { q: "Частное решение d²s/dt²+2dx/dt+2s=0, t=0, s=1, s'=1", a: ["s=e^(-t)(cos t+sin t)", "s=C₁e^t", "s=(C₂+C₃t)e^(2t)", "s=C₁e^t", "y=(C₂+C₃x)e^(2t)"], c: 0 },
    { q: "Решение 4d²ρ/dφ² + ρ = 0", a: ["ρ=C₁cos(φ/2)+C₂sin(φ/2)", "ρ=C₁e^φ", "ρ=C₁e^φ", "ρ=(C₂+C₃φ)e^(2t)", "y=(C₂+C₃x)e^(2t)"], c: 0 },
    { q: "Интеграл ∫(x²-1)dx", a: ["x³/3 - x + C", "x³/2 - 1 + C", "x³/3 - 1 + C", "x³/3 - 2x + C", "x³/3 - x"], c: 0 },
    { q: "Производная частного (u/v)'", a: ["(u'v - uv')/v²", "(Cu)'=Cu'", "(u+v)'=u'+v'", "(uv)'=u'v+v'u", "(u'v+uv')/v²"], c: 0 },
    { q: "Производная логарифмической функции (log_a x)'", a: ["1/(x·ln a)", "1/x²", "1/x", "1/ln a", "1/(y·ln a)"], c: 0 },
    { q: "Объём тела вращения вокруг оси Oy", a: ["V=∫π x² dy", "V=∫π dx", "V=∫π y³ dy", "V=∫π x³ dy", "1"], c: 0 },
    { q: "Объём тела вращения вокруг оси Ox", a: ["V=∫π y² dx", "V=∫π y³ dx", "V=∫dx", "V=∫π dy", "0"], c: 0 },
    { q: "Предел lim(n→2) (n²-5n+6)/(n²-12n+20)", a: ["1/8", "1/2", "3", "4", "1/5"], c: 0 },
    { q: "Интеграл ∫₀³ y²(1/y + 1) dy", a: ["13,5", "12", "10,2", "9,3", "11"], c: 0 },
    { q: "Первый замечательный предел", a: ["lim(x→0) sin x/x = 1", "lim(x→0) sin x/x = 0", "lim(n→∞)(1+1/n)ⁿ=e", "lim(n→∞)(1+1/n)ⁿ=1", "lim(x→0) sin x/x = 0"], c: 0 },
    { q: "Производная y = (1+ln x)/x", a: ["-ln x / x²", "ln x³", "ln x²", "(1/ln x - 1)²", "(1/ln x + 1)²"], c: 0 },
    { q: "Производная y = sin(t/2) + cos(t/2)", a: ["(1/2)[cos(t/2) - sin(t/2)]", "(1/2)[cos(t/2)+sin(t/2)]", "cos(t/2)-sin(t/2)", "cos(t/2)+sin(t/2)", "-(1/2)[cos(t/2)+sin(t/2)]"], c: 0 },
    { q: "Предел lim(x→0) (√(x²+4)-2)/(√(x²+9)-3)", a: ["3/2", "2,5", "0,2", "3/4", "1"], c: 0 },
    { q: "Общий вид первообразных y=3x²+4", a: ["x³+4x+C", "4x+C", "x³+4x", "x²+4x+C", "x³+C"], c: 0 },
    { q: "Предел lim(n→1) (n³-1)/(n-1)", a: ["3", "1", "-1", "∞", "5"], c: 0 },
    { q: "Подстановка для ∫√(a²+x²) dx", a: ["x = a tg t", "x = a cos t", "x = a sin t", "x = sin t", "x = tg t"], c: 0 },
    { q: "Частное решение dy=dx, y=4 при x=2", a: ["y=x+2", "y=x+1", "y=C₁cos x", "y=x", "y=-x"], c: 0 },
    { q: "Интеграл ∫ e^(cos x)·sin x dx", a: ["-e^(cos x)+C", "-e^(x·cos x)", "-e^(cos x)", "-e^(sin x)·sin x+C", "e^(x·cos x)+C"], c: 0 },
    { q: "Площадь плоской фигуры, ограниченной y=f(x), осью Ox, x=a, x=b", a: ["s=∫ₐᵇ f(x)dx", "s=∫ₐˣ f(x)dx", "s=-∫ₐᵇ f(x)dx", "s=∫ y F(x)dx", "s=∫ₐᵇ f(x)"], c: 0 },
    { q: "Интеграл ∫ ∛(5-6x) dx", a: ["-1/8·(5-6x)·∛(5-6x)+C", "∜(5-6x)³+C", "-1/8·∛(5-6x)⁵+x³", "-1/2·∜(5-6x)⁴+C", "-1/8·∜(5-6x)³"], c: 0 },
    { q: "Формула Ньютона-Лейбница", a: ["∫ₐᵇ f(x)dx = F(b)-F(a)", "∫ₐᵇ f(x)dx = F(b)+F(a)", "∫ₐᵇ f(x)dx = F(b)·F(a)", "∫ₐᵇ f(x)dx = [F(b)+F(a)]", "∫ₐᵇ f(x)dx = F(b)-F(a)"], c: 0 },
    { q: "Интеграл ∫ du/√(u²±a²)", a: ["ln|u+√(u²±a²)|+C", "ln|u-√(u²±a²)|+C", "ln|u√(u²±a²)|+C", "ln|√(u²±a²)|+C", "ln|u+√(u²±a²)|"], c: 0 },
    { q: "Формула интегрирования по частям", a: ["∫udv = uv - ∫vdu", "∫udv = uv + ∫vdu", "∫udv = uv∫vdu", "l=∫√(1+[f'(x)]²)dx", "∫f(x)dx=∫f[φ(t)]φ'(t)dt"], c: 0 },
    { q: "Формула длины дуги", a: ["l=∫ₐᵇ √(1+[f'(x)]²)dx", "l=∫ₐᵇ √(1-[f'(x)]²)dx", "l=∫₀ᵃ √(1+[f'(x)]²)dx", "l=∫ₐᵇ √([f'(x)-1]²)dx", "l=∫ₐᵇ √(1+[f'(x)]²)dx"], c: 0 },
    { q: "Интеграл ∫ du/(u²-a²)", a: ["1/(2a)·ln|(u-a)/(u+a)|+C", "1/(2a)·ln|u-a/(u+a)|+C", "1/2·ln|(u+a)/(u-a)|", "1/(2a)·log|(u-a)/(u+a)|+C", "1/2·ln|(u-a)/(u+a)|+C"], c: 0 },
    { q: "Интеграл ∫ dx/(x·ln x)", a: ["ln|ln x|+C", "ln x+C", "ln|cos x|+C", "ln|sin x|+C", "ln|ln x|"], c: 0 },
    { q: "Формула замены переменной в интеграле", a: ["∫f(x)dx = ∫f[φ(t)]φ'(t)dt", "∫f(x)dx = ∫f[φ(t)]dt", "∫f dx = ∫f[φ(t)φ'(t)]dt", "∫udv = uv - ∫vdu", "∫f(x)dx = ∫f[φ(t)φ'(t)]dt"], c: 0 },
    { q: "Интеграл ∫ dx/(a-x)", a: ["-ln|a-x|+C", "ln|a-x|+C", "ln|x|+C", "-ln|a+x|+C", "-ln|a-x|"], c: 0 },
    { q: "Общий вид первообразных y=sin(3x-4)", a: ["-1/3·cos(3x-4)+C", "-1/3·cos(3x)+C", "-1/3·cos(3x-4)-C", "-cos(3x-4)", "-1/3·cos(3x-4)"], c: 0 },
    { q: "Однородная система {3x+4y-z=0; x-3y+5z=0; 4x+y+4z=0}", a: ["x=7t, y=-6t, z=-3t", "x=t, y=-6, z=-3t", "x=7, y=-6, z=-3", "x=17t, y=-16t, z=-13t", "x=-t, y=6, z=3t"], c: 0 },
    { q: "Геометрический смысл производной", a: ["y' = tg x (тангенс угла наклона касательной)", "y' = sin x", "y' = ctg x", "y' = -tg x", "y' = cos x"], c: 0 },
    { q: "Производная y = x/(1-4x)", a: ["1/(1-4x)²", "x³", "x²", "(1/(4x)-2)²", "1/(1+4x)²"], c: 0 },
    { q: "Интеграл ∫ cos(ax+b) dx", a: ["1/a·sin(ax+b)+C", "sin(ax)+C", "1/a·sin(ax+b)", "1/a·sin ax+C", "sin(ax+b)+C"], c: 0 },
    { q: "Интервалы убывания y = x³+2x²", a: ["(-4/3;0)", "(-∞;∞)", "(-∞;0)", "(-∞;-4/3)", "(4/3;0)"], c: 0 },
    { q: "Производная s = (1+e^t)/(1-e^t)", a: ["2e^t/(1-e^t)²", "2e^t/(1+e^t)³", "(-1/(1+t²))³", "1/(2e^t√(6t+1))", "2e^t/(1+e^t)²"], c: 0 },
    { q: "Система {2x+3y+2z=9; x+2y-3z=14; 3x+4y+z=16}", a: ["(2;3;-2)", "(0;0;2)", "(4;5;6)", "(1;0;1)", "(2;-3;-2)"], c: 0 },
    { q: "Предел lim(x→∞)(1+2/x)^x", a: ["e²", "1/e", "e", "e³", "-e²"], c: 0 },
    { q: "Площадь под синусоидой y=sin x на [0,π]", a: ["2см²", "3см²", "5см²", "10см²", "12см²"], c: 0 },
    { q: "Предел lim(k→3)(k³-27)/(k-3)", a: ["27", "4", "5", "8", "17"], c: 0 },
    { q: "Общий вид первообразных y=5/cos²(8x)", a: ["5/8·tg(8x)+C", "5/8·tg5x+C", "5/8·tg8x", "5/8·ctg8x+C", "5/8·tg(5/8·x)+C"], c: 0 },
    { q: "Интеграл ∫ x⁴/(1+x²) dx", a: ["x³/3 - x + arctg x + C", "x³/3 - x + arctg x", "x³/3 + arctg x + C", "x³/3 - x + C", "x³/3 - 2x + arctg x + C"], c: 0 },
    { q: "Площадь фигуры y=-1/4·x²+x+3, y=0", a: ["22⅔", "25⅓", "1⅓", "1", "22"], c: 0 },
    { q: "Производная y = √(x²+2)", a: ["x/√(x²+2)", "x²+2", "5x/√(x²+2)", "1/√(x²+2)", "5x/√(x²-2)"], c: 0 },
    { q: "Формула производной в точке x₀", a: ["f'(x₀)=lim(Δx→0) Δf(x₀)/Δx", "Δf'(x₀)=lim(Δx→0) ΔF(x₀)/Δx", "f'(x₀)=lim(x→0) Δf(x₀)/Δx", "f'(x₀)=lim(x→0) Δf(x₀)/x", "f'(x₀)=lim(Δx→0) Δf(x₀)/x"], c: 0 },
    { q: "Второй замечательный предел", a: ["lim(n→∞)(1+1/n)ⁿ = e", "lim(x→0) sin x/x = 0", "lim(x→0) sin x/x = 1", "lim(n→∞)(1+1/n)ⁿ = n", "lim(n→∞)(1+1/n)ⁿ = 1"], c: 0 },
    { q: "Определитель |1 1 a; 1 a 1; a 1 1|", a: ["Δ = 3a - a³ - 2", "Δ = 2a - a³", "Δ = 3a + a³ - 2", "Δ = 3a - a² - 2", "Δ = 3a - a³"], c: 0 },
    { q: "Предел lim(k→4)(k²-6k+8)/(k-4)", a: ["2", "4", "5", "12", "17"], c: 0 },
    { q: "Предел lim(k→5)(5k²-2k-39)/(-k²-2k+15)", a: ["-3,8", "4", "5", "1,2", "1,7"], c: 0 },
    { q: "Предел lim(k→2)(2k²-k-6)/(3k²-7k+2)", a: ["7/5", "4", "5", "1,2", "-13/14"], c: 0 },
    { q: "Предел lim(k→3)(k²-k-6)/(3k-9)", a: ["5/3", "4", "5", "1,2", "-13/14"], c: 0 },
    { q: "Предел lim(k→3)(5k²-2k-39)/(-k²-2k+15)", a: ["-7/2", "4", "5", "1,2", "1,7"], c: 0 },
    { q: "Предел lim(x→-2)(∛(x-6)+2)/(x³+8)", a: ["1/144", "2,5", "0,2", "1", "3/4"], c: 0 },
    { q: "Предел lim(x→3)(2x-6)/(√(x+1)-2)", a: ["8", "2,5", "0,2", "1", "3/4"], c: 0 },
    { q: "Система {3x+y-4z=4; 5x-y+2z=4; 2x-3y+3z=-1}", a: ["(1;1;0)", "(0;0;2)", "(4;5;6)", "(1;0;1)", "(2;-3;-2)"], c: 0 },
    { q: "Система {x-3y+z=3; 2x-5y-2z=1; x-y+3z=3}", a: ["(-1;-1;1)", "(0;0;2)", "(4;5;6)", "(-1;-1;0)", "(2;-3;-2)"], c: 0 },
    { q: "Система {x-y+5z=10; 5x+y+z=8; x+8y-z=7}", a: ["(1;1;2)", "(0;0;2)", "(4;5;6)", "(-1;-1;1)", "(2;-3;-2)"], c: 0 },
    { q: "Система {x-10y-9z=4; 2x-10y-9z=4; 7x+y-z=11}", a: ["(0;5;-6)", "(0;0;2)", "(4;5;6)", "(-1;-1;1)", "(2;-3;-2)"], c: 0 },
    { q: "Система {x-y+z=6; 2x-5y+z=6; x-y-2z=-3}", a: ["(4;1;3)", "(0;0;2)", "(4;5;6)", "(-1;-1;0)", "(2;-3;-2)"], c: 0 },
    { q: "Система {x-y+2z=8; 2x+2y-z=6; x+y+z=12}", a: ["(1;5;6)", "(0;0;2)", "(4;5;6)", "(-1;-1;0)", "(2;-3;-2)"], c: 0 },
    { q: "Алгебраическое дополнение A₃₂ определителя |3 2 2; 1 3 1; 5 3 4|", a: ["A₃₂ = -1", "A₃₂ = 5", "A₃₂ = 4", "A₃₂ = -5", "A₃₂ = 1"], c: 0 },
    { q: "Объём параллелепипеда a=3i+4j, b=-3j+k, c=2j+5k", a: ["V = 41", "V = 5", "V = 10", "V = 51", "V = 18"], c: 0 },
    { q: "Объём пирамиды A(2;0;0), B(0;3;0), C(0;0;6), D(2;3;8)", a: ["V = 14", "V = 1", "V = 20", "V = 10", "V = 18"], c: 0 },
    { q: "Алгебраическое дополнение элемента aᵢⱼ", a: ["Aᵢⱼ = (-1)^(i+j)·{aᵢⱼ}", "Aᵢⱼ = (-1)^(ij)·{aᵢⱼ}", "Aᵢⱼ = (-1)^(ij)", "Aᵢⱼ = {aᵢⱼ}", "Aᵢⱼ = (-1)^(i+j)"], c: 0 },
    { q: "Расстояние между M₁(-5;3) и M₂(2;3)", a: ["d=7", "d=5", "d=41", "d=10", "d=10"], c: 0 },
    { q: "Предел lim(x→∞)(1+5/x)^x", a: ["e⁵", "1/e", "e", "e¹⁰", "e³"], c: 0 },
    { q: "Определитель |2 3 2; 1 2 -3; 3 4 1|", a: ["-6", "2,5", "0,2", "3", "3/4"], c: 0 },
    { q: "Определитель |3 4 -1; 1 -3 5; 4 1 4|", a: ["0", "2,5", "0,2", "3", "3/4"], c: 0 },
    { q: "Производная (arcsin x)'", a: ["1/√(1-x²)", "-1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)", "1/(1-x²)"], c: 0 },
    { q: "Производная (arccos x)'", a: ["-1/√(1-x²)", "1/√(1-x²)", "1/(1+x²)", "-1/(1+x²)", "1/(1-x²)"], c: 0 },
    { q: "Производная (arctg x)'", a: ["1/(1+x²)", "-1/√(1-x²)", "-1/(1+x²)", "1/(1-x²)", "1/√(1-x²)"], c: 0 },
    { q: "Производная (arcctg x)'", a: ["-1/(1+x²)", "-1/√(1-x²)", "1/(1+x²)", "1/(1-x²)", "1/√(1-x²)"], c: 0 },
    { q: "Производная (√x)'", a: ["1/(2√x)", "-1/(2√x)", "1/(1+x²)", "-1/(1+x²)", "1/(1-x²)"], c: 0 },
    { q: "Производная (a^x)'", a: ["a^x·ln a", "x·a^(x-1)·ln x", "x·a^x·ln a", "a^x·ln x", "e^x·ln a"], c: 0 },
    { q: "Производная (x^n)'", a: ["n·x^(n-1)", "n·y^(n-1)", "e^x·ln a", "a^x·ln a", "n·x^(n+1)"], c: 0 },
    { q: "Производная (1/x)'", a: ["-1/x²", "1/(1+x²)", "1/√(1-x²)", "1/(2√x)", "1/x²"], c: 0 },
    { q: "Производная (ctg x)'", a: ["-1/sin²x", "1/cos²x", "-sin x", "cos x", "tg x"], c: 0 },
    { q: "Производная произведения (uv)'", a: ["u'v + uv'", "(u'v - uv')/v²", "(u'v + uv')/v²", "uv", "u'v - uv'"], c: 0 },
    { q: "Интеграл ∫ du/u²", a: ["-1/u + C", "1/u + C", "1/(2√u)+C", "-1/(2u)+C", "1/u²"], c: 0 },
    { q: "Интеграл ∫ du/(a²+u²)", a: ["1/a·arctg(u/a)+C", "arctg(u/a)+C", "arcsin(u/a)", "1/(2a)·ln|(a+u)/(a-u)|", "arccos(u/a)"], c: 0 },
    { q: "Интеграл ∫ sin(4/5·x) dx", a: ["-5/4·cos(4/5·x)+C", "cos(4/5·x)+C", "-5/4·cos(1/5·x)+C", "-5/4·sin(4/5·x)+C", "-5/4·cos(4/5·x)"], c: 0 },
    { q: "Интеграл ∫ dx/(3x-2)", a: ["1/3·ln(3x-2)+C", "1/3·ln(3x+2)+C", "ln(3x-2)+C", "ln(3x+2)+C", "1/2·ln(3x+2)"], c: 0 },
    { q: "Интеграл ∫ dz/(25-z²)", a: ["1/10·ln|(5+z)/(5-z)|+C", "1/5·ln|(5+z)/(5-z)|+C", "ln|(5+z)/(5-z)|+C", "1/10·ln|(5+z)/(5-z)|", "1/5·ln|(5+z)/(5-z)|"], c: 0 },
    { q: "Интеграл ∫ dx/cos²(7x)", a: ["1/7·tg(7x)+C", "tg(7x)+C", "1/7·ctg(7x)", "1/7·ctg(7x)+C", "(1/7)·tg(7x)"], c: 0 },
    { q: "Интеграл ∫ dx/(16+4x²)", a: ["1/8·arctg(x/2)+C", "arctg(x/2)+C", "arccos(x/2)+C", "1/8·arccos(x/2)+C", "1/8·arcsin(x/2)+C"], c: 0 },
    { q: "Интеграл ∫ e^(-3x) dx", a: ["-1/3·e^(-3x)+C", "e^(-3x)+C", "-1/3·e^(-3x)", "1/3·e^(3x)+C", "e^(3x)+C"], c: 0 },
    { q: "Интеграл ∫ 5^(2x) dx", a: ["5^(2x)/(2·ln5)+C", "5^(2x)/(ln5)+C", "5^(2x)/(2·ln5)", "5^(2x)/(2·ln2)+C", "5^(2x)/(2·ln2)"], c: 0 },
    { q: "Интеграл ∫ dx/∛x", a: ["3/2·∛(x²)+C", "1/2·∛(x²)+C", "3/2·∛(x²)", "∛(x²)+C", "5/2·∛(x²)+C"], c: 0 },
    { q: "Интеграл ∫ sin(3/5·x) dx", a: ["-5/3·cos(3/5·x)+C", "5/3·cos(3/5·x)+C", "1/3·cos(1/5·x)+C", "cos(3/5·x)+C", "5/3·cos(3/5·x)"], c: 0 },
    { q: "Интеграл ∫ (5x¹²+3x⁶)/x² dx", a: ["5x¹¹/11 + 3x⁵/5 + C", "x¹¹/11 + 3x⁵/5 + C", "5x¹³/11 + 3x⁵/5 + C", "5x¹¹/11 + 3x⁵/5", "x¹¹/11 + 3x⁵/5"], c: 0 }
];

// ============================================================
// ЛОГИКА ТЕСТА — 30 ВОПРОСОВ, 45 СЕКУНД
// ============================================================
const QUESTION_COUNT = 30;
const TIME_PER_QUESTION = 45;

let currentQuestions = [];
let originalQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval = null;
let timeLeft = TIME_PER_QUESTION;
let active = false;
let isAnswered = false;

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function shuffleQuestionOptions(question) {
    const newOptions = [...question.a];
    const correctText = question.a[question.c];
    const shuffledIndices = shuffleArray([0, 1, 2, 3, 4]);
    const newAnswers = shuffledIndices.map(i => newOptions[i]);
    const newCorrectIndex = newAnswers.findIndex(txt => txt === correctText);
    return { text: question.q, answers: newAnswers, correct: newCorrectIndex };
}

function getRandomQuestions() {
    const shuffledAll = shuffleArray([...QUESTIONS]);
    return shuffledAll.slice(0, QUESTION_COUNT);
}

function prepareSession(original) {
    return original.map(q => shuffleQuestionOptions(q));
}

function updateTimerUI(seconds) {
    const ring = document.querySelector('.timer-ring .fill');
    const timerNum = document.getElementById('timerSeconds');
    if (!ring) return;
    const circumference = 2 * Math.PI * 34;
    timerNum.innerText = seconds;
    const offset = circumference - (seconds / TIME_PER_QUESTION) * circumference;
    ring.style.strokeDashoffset = offset;
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
}

function startTimer() {
    stopTimer();
    timeLeft = TIME_PER_QUESTION;
    updateTimerUI(TIME_PER_QUESTION);
    timerInterval = setInterval(() => {
        if (!active) return;
        if (timeLeft <= 1) {
            stopTimer();
            handleTimeout();
        } else {
            timeLeft--;
            updateTimerUI(timeLeft);
        }
    }, 1000);
}

function handleTimeout() {
    if (!active || isAnswered) return;
    isAnswered = true;
    const originalQ = originalQuestions[currentIndex];
    userAnswers.push({
        correct: false,
        selected: -1,
        userAnswerText: "⏰ Время вышло",
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q
    });
    goToNextQuestion();
}

function renderCurrentQuestion() {
    isAnswered = false;
    const q = currentQuestions[currentIndex];
    document.getElementById('qText').innerHTML = q.text;
    document.getElementById('qNum').innerText = `ЗАДАЧА ${currentIndex + 1}/${currentQuestions.length}`;
    const container = document.getElementById('answersContainer');
    container.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D', 'E'];
    q.answers.forEach((ans, idx) => {
        const btn = document.createElement('div');
        btn.className = 'answer-btn';
        btn.innerHTML = `<div class="letter">${letters[idx]}</div><div>${ans}</div>`;
        btn.onclick = () => handleAnswer(idx, ans);
        container.appendChild(btn);
    });
    document.getElementById('progressFill').style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
    startTimer();
}

function handleAnswer(selectedIdx, selectedText) {
    if (!active || isAnswered) return;
    isAnswered = true;
    stopTimer();
    const currentQ = currentQuestions[currentIndex];
    const originalQ = originalQuestions[currentIndex];
    const isCorrect = (selectedIdx === currentQ.correct);
    if (isCorrect) score++;
    userAnswers.push({
        correct: isCorrect,
        selected: selectedIdx,
        userAnswerText: selectedText,
        correctAnswerText: originalQ.a[originalQ.c],
        questionText: originalQ.q
    });
    const btns = document.querySelectorAll('#answersContainer .answer-btn');
    if (btns[selectedIdx]) btns[selectedIdx].classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect && btns[currentQ.correct]) btns[currentQ.correct].classList.add('correct');
    setTimeout(() => goToNextQuestion(), 900);
}

function goToNextQuestion() {
    if (currentIndex + 1 < currentQuestions.length) {
        currentIndex++;
        renderCurrentQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    active = false;
    stopTimer();
    saveToHistory();
    showResultScreen();
    document.getElementById('floatingExitBtn').style.display = 'none';
}

function saveToHistory() {
    const history = JSON.parse(localStorage.getItem('medicalMathHistory') || '[]');
    history.unshift({
        date: new Date().toLocaleString(),
        score: score,
        total: currentQuestions.length
    });
    if (history.length > 20) history.pop();
    localStorage.setItem('medicalMathHistory', JSON.stringify(history));
}

function showResultScreen() {
    document.getElementById('quizArea').style.display = 'none';
    const resultDiv = document.getElementById('resultArea');
    resultDiv.style.display = 'block';
    const wrongCount = userAnswers.filter(a => !a.correct).length;
    resultDiv.innerHTML = `
        <div class="result-screen">
            <div class="result-score">${score}/${currentQuestions.length}</div>
            <div class="stats-row">
                <div class="stat-pill green"><span class="val">✅ ${score}</span><span class="lbl">ВЕРНО</span></div>
                <div class="stat-pill red"><span class="val">❌ ${wrongCount}</span><span class="lbl">ОШИБКИ</span></div>
            </div>
            <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" id="newTestBtn">🎲 Новая сессия</button>
                <button class="btn btn-ghost" id="repeatTestBtn">🔄 Повторить этот тест</button>
                <button class="btn btn-ghost" id="showErrorsBtn">❌ Разбор ошибок</button>
            </div>
        </div>
    `;
    document.getElementById('newTestBtn').onclick = () => location.reload();
    document.getElementById('repeatTestBtn').onclick = () => startTestWithQuestions(prepareSession(originalQuestions), originalQuestions);
    document.getElementById('showErrorsBtn').onclick = () => showErrorsModal();
}

function showErrorsModal() {
    const errors = userAnswers.filter(a => !a.correct);
    const errorsDiv = document.getElementById('errorsList');
    if (errors.length === 0) errorsDiv.innerHTML = '<div>🎉 Нет ошибок! 🎉</div>';
    else {
        errorsDiv.innerHTML = errors.map((err, idx) => `
            <div class="error-item">
                <div class="error-question">${idx + 1}. ${err.questionText}</div>
                <div class="error-detail">❌ Ваш ответ: ${err.userAnswerText}</div>
                <div class="error-detail">✅ Правильный ответ: ${err.correctAnswerText}</div>
            </div>
        `).join('');
    }
    document.getElementById('errorsModal').classList.add('active');
}

function startTestWithQuestions(shuffled, original) {
    currentQuestions = shuffled;
    originalQuestions = original;
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    active = true;
    isAnswered = false;
    document.querySelector('.hero').style.display = 'none';
    document.getElementById('quizArea').style.display = 'block';
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('floatingExitBtn').style.display = 'flex';
    renderCurrentQuestion();
}

function startNewTest() {
    const original = getRandomQuestions();
    const shuffled = prepareSession(original);
    startTestWithQuestions(shuffled, original);
}

// Инициализация событий
document.getElementById('startTestBtn').onclick = startNewTest;
document.getElementById('floatingExitBtn').onclick = () => document.getElementById('exitModal').classList.add('active');
document.getElementById('cancelExitBtn').onclick = () => document.getElementById('exitModal').classList.remove('active');
document.getElementById('confirmExitBtn').onclick = () => location.reload();
document.getElementById('historyBtn').onclick = () => {
    const history = JSON.parse(localStorage.getItem('medicalMathHistory') || '[]');
    const historyDiv = document.getElementById('historyList');
    if (history.length === 0) historyDiv.innerHTML = '<div>Пока нет пройденных тестов.</div>';
    else historyDiv.innerHTML = history.map(h => `<div class="history-item">📅 ${h.date} — ${h.score}/${h.total}</div>`).join('');
    document.getElementById('historyModal').classList.add('active');
};
document.getElementById('closeHistoryBtn').onclick = () => document.getElementById('historyModal').classList.remove('active');
document.getElementById('closeErrorsBtn').onclick = () => document.getElementById('errorsModal').classList.remove('active');

window.onclick = (e) => {
    if (e.target === document.getElementById('exitModal')) document.getElementById('exitModal').classList.remove('active');
    if (e.target === document.getElementById('historyModal')) document.getElementById('historyModal').classList.remove('active');
    if (e.target === document.getElementById('errorsModal')) document.getElementById('errorsModal').classList.remove('active');
};