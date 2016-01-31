function getProvince() {
    return ['湖南', '广东'];

}

function getCityByProvince(province) {
    if (province == '湖南') {
        return ['长沙', '株洲'];
    } else if (province == '广东') {
        return ['广州', '河源'];
    } else {
        throw new Error('报错了')
    }
}

function getAreaByCity(city) {
    if (city == '长沙') {
        return ['岳麓区', '天心区', '雨花区'];
    } else if (city == '河源') {
        return ['源城区', '高新区'];
    } else {
        return ['1', '2', '一些乱七八糟的区'];
    }
}

$(function(){
    function objInit(obj){
        return $(obj).html('<option>请选择</option>');
    }
    $.each(getProvince(),function(index,province){
        $('#province').append('<option>'+province+'</option>');
    });
    $("#province").change(function(){
        objInit('#city');
        objInit('#area');
        $.each(getProvince(),function(index,province,city){
            if($('#province option:selected').text()==province ){
                $.each(getCityByProvince(province),function(i,e){
                    $("#city").append('<option>'+e+'</option>')
                });
                $("#city").change(function(){
                    $.each(getCityByProvince(province),function(index,city,area){
                        if($('#city option:selected').text()==city){
                            objInit('#area');
                            $.each(getAreaByCity(city),function(i,e){
                                $("#area").append("<option>"+e+"</option>")
                            });
                        }
                    })
                })
            }
        })
    })
});