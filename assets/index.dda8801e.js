import{u as e,c as a,o as r,a as t,b as o,t as s,d as n,e as i,f as l}from"./vendor.4383ccce.js";const d={id:"content"},u={id:"goalContainerPositioner"},c={id:"goalContainer"},g=o("h3",null,"Текущая цель",-1),m=o("div",null,[o("h3",{align:"left"},"Положение дел")],-1),h={id:"globalInfoRow"},p=o("hr",{class:"svl"},null,-1),v=o("hr",{class:"svl"},null,-1),b=o("hr",null,null,-1),w={id:"globalInfoRow"},x=o("hr",{class:"svl"},null,-1),_=o("hr",{class:"svl"},null,-1),k={setup(i){const l=e(),k=a((()=>l.state.Entity));return(e,a)=>(r(),t("div",d,[o("div",u,[o("div",c,[g,o("p",null,s(n(k).quests[n(k).quests.active].goal),1)])]),m,o("div",h,[o("p",null,"Золото: "+s(n(k).gold),1),p,o("p",null,"Мораль: "+s(n(k).squadState.morality),1),o("button",{class:"moralButton",onClick:a[0]||(a[0]=()=>{})},"▼"),v,o("p",null,"Известность: "+s(Math.floor(n(k).squadState.reputation)),1)]),b,o("div",w,[o("p",null,"Дней до выплаты: "+s(n(k).squadState.paydayleft),1),x,o("p",null,"Жалование: "+s(e.payday),1),_,o("button",{onClick:a[1]||(a[1]=()=>{})},"Финансы")])]))}};const f=i({modules:{Entity:{state:()=>({day:1,gold:1120,show:{rangInfo:!1},squadState:{paydayleft:6,morality:50,reputation:0},squad:{smerd:6,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},tohire:0,wa:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},wpc:{smerd:7,dubolom:12,warrior:35,veteran:100,knight:300,hero:1e3},wp:{smerd:10,dubolom:16,warrior:32,veteran:50,knight:100,hero:700},wdc:{smerd:40,dubolom:16,warrior:7,veteran:3,knight:2,hero:.01},warriorsdie:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},exp:{smerd:[60,0],dubolom:[200,0],warrior:[400,0],veteran:[1e3,0],knight:[4e3,0],hero:[1e6,0]},expbaseinc:{smerd:[2,3,4,5],dubolom:[2,4,8,12],warrior:[2,6,12,24],veteran:[2,6,12,36],knight:[2,6,12,48],hero:[0,0,0,0]},expreward:0,squad_imp:{smerd:0,dubolom:0,warrior:0,veteran:0,knight:0,hero:0},Kojania:{demonicPresence:30,demonicPresenceList:[{num:200,className:"white-grade",text:"редкие одиночные цели"},{num:1e3,className:"green-grade",text:"редкие малые стаи"},{num:2500,className:"yellow-grade",text:"возможны крупные стаи"},{num:5e3,className:"red-grade",text:"орды демонов"},{num:9e3,className:"black-grade",text:"чудовищные орды демонов"}],prosperity:250,prosperityList:[{num:50,className:"black-grade",text:"пепелище"},{num:200,className:"red-grade",text:"восстановление"},{num:1e3,className:"yellow-grade",text:"укрепление"},{num:2500,className:"green-grade",text:"стабильность"},{num:5e3,className:"white-grade",text:"экспансия"}],reputation:0,repSumm:0,reputationGain:[],reputationList:[{num:108,className:"yellow-grade",text:"нейтральные"},{num:250,className:"green-grade",text:"открытые"},{num:1e3,className:"white-grade",text:"теплые"},{num:5e3,className:"white-grade",text:"дружеские"},{num:1e4,className:"white-grade",text:"союзные"}],goldBonus:1,enemyBonus:1,availableWarriors:1,targetAvailableWarriors:2,baseHireCost:140,hirecost:14},messageLog1:"",messageLog2:[],battleReport:{result:{key:0,text:[]},gold:0,exp:0},info:["Демоны -- крайне опасные существа. Даже слабейший из них, за счет невероятной грубой силы и живучести, требует слаженной работы десятка людей. У них множество подвидов с различными особенностями. Но, как правило, дальнобойное оружие и добротные копья делают свое дело. По возможности лучше использовать ловушки и не допускать сближения.","Тушки демонов пользуются хорошим спросом. Почти каждую часть их тела можно считать стратегическим ресурсом. Кроме съедобного мяса это отличные доспехи из кожи. Вполне боеспособные луки и арбалеты из прочных связок. Невероятно огромный список амуниции из костей. Каждый участник охоты или сражения получает часть прибыли с этих трофеев."],quests:{active:"hire_10_smerd",hire_10_smerd:{goal:"Нанять 10 рекрутов",finishText:"Рекруты набираются опыта в бою и на тренировке. Когда они будут готовы стоит подумать об их продвижении. При продвижении придется заплатить разовое 2х недельное жалование. Но зато бойцы обязуются улучшить снаряжение, что сделает их сильнее уже в следующем бою и мотивирует на новые подвиги.",niceQuestMsgs:["Можно продвигать рекрутов.","Доступны простые контракты."]},found_contract:{goal:"Выполнить контракт.",finishText:"Время от времени будут появляться различные контракты. Их выполнение важно как для Кожании так и для нас. Хотя мы и не обызаны под этим подписываться, без Кожании у нас мало шансов. Заказчик укажет минимальные требования и предпологаемые проблемы... Однако реальность всегда может оказаться намного хуже самых смелых ожиданий. Если мы не хотим потерять все, нам придется быть к этому, по возможности, готовыми.",niceQuestMsgs:["Можно продвигать дуболомов.","Доступны сложные контракты."]},take_3000_gold:{goal:"3000 золота и 500 мощи",finishText:"Местный староста -- солидный господин. Он весьма снисходителен к гостям и готов бесплатно предоставлять некоторый уровень безопасности. Правда, вне центральной крепости, которая с каждым днем становится все более массивной. Благодаря его политике золото в цене даже в такие времена, а мы без проблем можем купить хорошую экипировку для наших воинов.",niceQuestMsgs:["Отдана 1000 золота, отношения улучшились.","Доступен прогноз рекрутов на следующий день.","Доступно резервирование отрядов."]},take_20_warriors:{goal:"20 воинов и 2000 мощи",finishText:"Нужно полностью захватить и обустроить рудные шахты и помочь с остальными ресурсами, расположенными далеко от поселения. Некоторые контракты -- чистое самоубийство, но вместе с тем их стратегическое значение крайне велико, возможно деже жизненно необходимо.",niceQuestMsgs:["Можно продвигать воинов","Доступны безумные контракты."]},take_10_veterans:{goal:"10 ветеранов и 5000 мощи",finishText:"Наша известность работает в обе стороны. В прославленный отряд присоединяется больше людей и этими людьми проще управлять. Нам доверяют самое лучшие оружие и щедро платят за трофеи. Однако лишь совсем ленивый или в конец тупой не заметил бы наши слабые места. Чем дольше мы сидим на одном месте, тем больше внимания в округе мы привлекаем. За стенами это не так заметно. Но к каждому контракту нужно относиться с осторожностью.",niceQuestMsg1:"Можно продвигать ветеранов",niceQuestMsgs:["Можно продвигать ветеранов."]},take_10_knights:{goal:"10 рыцарей и 9000 мощи",finishText:"Туши убитых демонов полны сюрпризов. Металлурги и алхимики делают исключительные открытия и создают невероятные вещи. Конечно, кто-то должен эти туши добыть, как правило ценой своих жизней, а потом кто-то должен с ними как следует поработать. Но в такие времена сам факт прогресса уже вселяет надежду.",niceQuestMsgs:["Можно продвигать рыцарей."]},take_10_heroes:{goal:"10 героев и 40к мощи",finishText:"Победа (нет)",niceQuestMsgs:[""]}},isAvailableContracts:!1,contracts:{common:{isAvailable:!1,generationChance:[12,12],revard:{first:200,loot:20},prosperityChange:6,reputationCnange:8,chancetoLose:[0,10],basePower:50,scaleRange:6},hard:{isAvailable:!1,generationChance:[5,5],revard:{first:600,loot:35},prosperityChange:10,reputationCnange:16,chancetoLose:[0,4],basePower:300,scaleRange:4},madness:{isAvailable:!1,generationChance:[2,2],revard:{first:1800,loot:50},prosperityChange:20,reputationCnange:32,chancetoLose:[0,2],basePower:1e3,scaleRange:3}},contract_list:[],availableContracts:0,contract_is_taken:[0,0,0,0],rangName:{smerd:"Рекрут",dubolom:"Дуболом",warrior:"Воин",veteran:"Ветеран",knight:"Рыцарь",hero:"Герой"},modalError:!1,modalErrorText:"",modalMissionText:"",isDebug:!0}),getters:{},mutations:{hire(e,a){e.squad.smerd+=a,e.gold-=e.Kojania.hirecost*a,e.Kojania.availableWarriors-=a},hire_reset_helper(e,a){e.Kojania.availableWarriors<a&&(e.tohire=e.Kojania.availableWarriors)},error(e,a){e.modalErrorText=a,e.modalError=!0},addGold(e){e.gold*=10},addRep(e){e.Kojania.reputation+=50,console.log(e.Kojania.reputation)},addRen(e){e.squadState.reputation+=50,console.log(e.squadState.reputation)},addx2Rep(e){e.Kojania.reputation*=2,console.log(e.Kojania.reputation)},addDaemons(e){e.Kojania.demonicPresence*=2,console.log(e.Kojania.demonicPresence)}},actions:{hire({commit:e,state:a},r){e("hire_reset_helper",1),a.gold>=a.Kojania.hirecost*r&&a.Kojania.availableWarriors>0?e("hire",r):a.Kojania.availableWarriors>0?e("error","Нужно больше золота."):e("error","Рекруты закончились. Возможно завтра будут новые."),e("hire_reset_helper",1)}}}}});l(k).use(f).mount("#app");
