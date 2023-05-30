var app = new Vue({
    el: '#app',
    data: {
        lists: [],
        keyword: "",
        Image: ("img"),
        tag_lists: ['★4以上','5000円以下','3000円以下','Ranan','BELLUNA'],
        preview: [] //checkしたカテゴリを格納          
    },

    mounted() {
        this.csv_data('商品データ.csv');
      },
      methods: {
        csv_data(dataPath){
            let request = new XMLHttpRequest(); //HTTPでファイル読み込み
            request.addEventListener('load', (event) =>{ //ロードさせ実行
                let response = event.target.responseText; //受け取ったテキストを返す
                this.csv_array(response); //表示
            });
            request.open('GET',dataPath, true); //アクセスするファイルを指定
            request.send(); //HTTPリクエストの発行
        },
        //CSVを配列に格納
        csv_array(data){
            let dataArray = [];
            let dataString = data.split(/\r\n/);  //改行
            for(let i = 0; i < dataString.length; i++){
                dataArray[i] = dataString[i].split(' ');
            }
            dataArray.shift();  //先頭行を削除
            //console.log(dataArray); //コンソールには表示 
                this.lists = dataArray;

                
                this.lists[0] = "./img/" + list[0];     
            
        }
       
    },

    computed: {
        searchitems: function(){
            //console.log(this.keyword); //入力した文字がコンソールに表示
            let items = []; //検索したとき用の配列
            for(let i in this.lists){
                let list = this.lists[i];
                if(list.indexOf(this.keyword)> -1){ //listsとキーワードが一致するか
                    items.push(list); //一致した場合はitemsにデータを格納
                }  
            }
            return items;
        }
        }
});