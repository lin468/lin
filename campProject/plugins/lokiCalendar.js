
//宣告全域變數
let
apiPath='./db.json', 
bookd=[],
nationalHoliday=[],
pallet={};

//初始化作業
fetch('./db.json',{method:'GET'})
.then(res=>res.json())
    .then(json=>{
        //booked=json.booked;
        //pallet=json.pallet;
        //nationalHoliday=json.nationalHoliday;
    ({booked,pallet,narionalHoliday}=json);
    runCalenderService=()

    });
    const runCalenderService=()=>{
        console.log('start design calender');
        const today=dayjs;
        claLeft={
            title:'Left.Calender',
            listBox:'<li>1<li><li>2<li>',
            thisDate:theDay,
    
    },
    calRight={
        title:'Right Calender',
        listBox:'<li>1</li><li>2</li>',
        thisDate:theDay,
    },
        listMaker=(obj)=>{//調整萬年曆物件,調整完畢後，返回修改後得物件
            //const firstDay=obj.thisDate.date(1).day();
            const firstDay=obj.thisDate.startOf('month').day();//該月第一天禮拜幾
            const totalDay=obj.thisDate.daysMonth();//該月有幾天
           // console.log(calLeft,calRight);

           for(let i=1;i<(firstDay||7);i++){//控制產生多少空白日
            obj.listBox+=`<li class="JsCal"></li>`;
          }//

           for (let i = 1; i <= totalDay ;i++){//控制產生多少日期
            obj.listBox+=`<li class="JsCal">${i}</li>`;

           }
           //method1
           obj.title=`${obj.thisDate.year()}年${obj.thisDate.month()+1}月`;
            return obj;
          //method2
          const twMonth=window.day.js_locale_zh_tw.months;
          obj.title=`${twMonth[obj.thisDate.month()]}${obj.thisDate.year}]`
          
        },
        listPrint=()=>{//輸出到DOM
        //    console.log
          document.querySelector('.leftList').innerHTML=listMaker(calLeft).listBox;
          document.querySelector('rightDayList').innerHTML=listMaker(calRight).listBox;

        document.querySelector('leftBar')
        };

    }

   init();
   //     console.log(json);



