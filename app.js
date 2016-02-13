

var WordCounterAPP = {
    cantidadLetras:0,
    contar:function(){
        var text = document.getElementById("text").value;
        var wordMap = this.doMagic(text);
        console.log(wordMap);
        for(var key in wordMap){
            var item = $('<li class="list-group-item">'+key+":"+wordMap[key]+'</li>');
            $("#words").append(item);
        }
    }
    ,caracteres:function(evt){
        this.cantidadLetras++;
        //document.getElementById("cantChars").innerHTML = this.cantidadLetras;
        $("#cantChars").text(this.cantidadLetras);
    }
    ,doMagic:function(text){
        var result = {};
        var words = text.split(" ");
        for(var i = 0; i < words.length; i++){
            var aWord = words[i];

            if(result[aWord]){
                result[aWord]++;
            }else{
                result[aWord] = 1;
            }
        }
        return result;
    }
};

window.APP = WordCounterAPP;