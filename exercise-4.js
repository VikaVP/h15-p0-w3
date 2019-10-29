var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2() {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)
    var bulan = ''
    bulan = input[3].split('/')
    switch (bulan[1]) {
        case '01':
            bulan = 'Januari'
            break;
        case '02':
            bulan = 'Februari'
            break;
        case '03':
            bulan = 'Maret'
            break;
        case '04':
            bulan = 'April'
            break;
        case '05':
            bulan = 'Mei'
            break;
        case '06':
            bulan = 'Juni'
            break;
        case '07':
            bulan = 'Juli'
            break;
        case '08':
            bulan = 'Agustus'
            break;
        case '09':
            bulan = 'September'
            break;
        case '10':
            bulan = 'Oktober'
            break;
        case '11':
            bulan = 'November'
            break;
        case '12':
            bulan = 'Desember'
            break;
        default:
            bulan = 'bulan tidak tersedia'
            break;
    }
    console.log(bulan)
    var dateTime = input[3].split('/')
    dateTime.sort(function (a, b) {
        return b - a
    })
    console.log(dateTime);
    console.log(dateTime.join('-'));

    console.log(input[1].slice(0, 15));




}
dataHandling2(input)