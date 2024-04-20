


$(document).ready(function(){
   // let lang = ['HTML',"CSS","JAVASCRIPT"]
   let com = {
    "16":['alger center','Bab eloued','Kouba','Hydra'],
    "31":['Oran','Senia','Ain Turk','Arzew'],
    "09":['Blida ','boufarik','chebli','Soumaa']
   }
    $(document).on('change','#w',function(){
       let v = $(this).val()
      console.log(com[v]);
      
    })
    
})