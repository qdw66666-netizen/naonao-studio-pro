let naonaoData={
 projects:[],
 customers:[],
 finance:{
  income:0,
  pending:0
 }
};

function saveData(){
 localStorage.setItem(
  "naonaoData",
  JSON.stringify(naonaoData)
 );
}

function loadData(){
 let data=localStorage.getItem("naonaoData");
 if(data){
  naonaoData=JSON.parse(data);
 }
}

loadData();
