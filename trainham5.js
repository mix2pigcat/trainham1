    var a = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    var b = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    var c=prompt('Nhap vao ten ngoi sao : ')
    for (var i = 0; i < a.length; i++) {
            if (c==a[i]){
                alert('Ten ngoi sao la : '+b[i])
                break;
            }
        }if(i==a.length){
        alert("ko tim ddc");
    }
