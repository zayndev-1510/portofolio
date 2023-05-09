



const button=document.querySelector(".navbar__ham");
const menu=document.querySelector(".navbar__links")
var openCV=document.getElementById("openCv");



openCV.addEventListener("click",()=>{
    var page=document.createElement("a");
    page.target="__blank";
    page.title="CV";
    page.href="CV.pdf";
    page.click();
})

button.addEventListener("click",()=>{
    button.classList.toggle("open");
    menu.classList.toggle("navbar__open")
})
menu.addEventListener("click",()=>{
    button.classList.toggle("open");
    menu.classList.toggle("navbar__open")
})


/*jshint esversion: 6 */

var app = angular.module("homeApp", []);


app.controller("homeController", function ($scope) {

    // deklarasi variabel
    var fun = $scope;
    var str="";

    fun.about_me={
        name:"Hai, I'm Zayn",
        position:"Full Stack Developer",
        kontent:str
    }

    fun.pendidikan=[
        {tahun:"2008-2011",sekolah:"SMP Negeri 1 Mangoli Utara",ket:"Pernah Bersekolah di SMP Negeri 1 Mangoli Utara"},
        {tahun:"2011-2014",sekolah:"SMA Negeri 1 Mangoli Utara",ket:"Pernah Bersekolah di SMA Negeri 1 Mangoli Utara"},
        {tahun:"2015-2020",sekolah:"Universitas Dayanu Ikshanuddin Baubau",ket:"Program Studi Teknik Informatika Universitas Dayanu Ikshanudin Baubau"}   
    ]
   
    fun.pengalaman_kerja=[
        {tahun:"Juni 2018 - Februari 2020",judul:"Asisten Dosen Laboratorium Teknik Informatika Unidayan Baubau",data:
        ["Sebagai Penanggung Jawab Dalam Membantu Dosen Proses Belajar Mengajar Dilaborotorium"]},
        {tahun:"Januari 2019 - Maret 2019",judul:"SISTEM INFORMASI BPDB BUTON BAUBAU BERBASIS WEBSITE",data:
        ["Sebagai Programmer Dalam Merancang Dan Menganalisis Sistem Yang Dibutuhkan Di Website",
        "Membangun Sistem Sesuai Rancangan Menggunakan HTML,CSS,PHP, Dan Javascript","Melakukan Pengujian Sistem Secara Manual Sebelum Dipublikasikan",
        "Melakukan Pengujian Sistem Secara Resmi Di Publikasikan Di Kantor BPDB BUTON Baubau"]},
        {tahun:"September 2020 - Oktober 2020",judul:"Aplikasi Absen Karyawan Menggunakan Scan QR Barcode Berbasis Mobile",data:
        ["Sebagai Programmer Dalam Merancang Dan Menganalisis Sistem Yang Dibutuhkan Di Aplikasi","Membangun Sistem Sesuai Rancangan Dengan Menggunakan Java dan Laravel",
    "Melakukan Pengujian Sistem Secara Manual Sebelum Dipublikasikan"]},
        {tahun:"Oktober 2022 - Desember 2022",judul:"E-Library Universitas Dayanu Ikshanuddin Baubau Berbasis Website",data:
        ["Sebagai Staft IT Dan Programmer Dalam Merancang Dan Menganalisis Sistem Yang Dibutuhkan Di Website.","Membangun Sistem Sesuai Rancangan Menggunakan Framework Laravel Dan Angular JS",
    "Melakukan Pengujian Sistem Secara Manual Sebelum Dipublikasikan","Melakukan Pengujian Sistem Secara Resmi Di Publikasikan Di Ruangan Rektor Univeristas Dayanu Ikshanuddin Baubau"
    ]},
    ]
    fun.hardskill=[
        {
            keterangan:"Microsoft Office"
        },
        {
            keterangan:"Linux"
        }
    ];

    fun.softskill=[
        {keterangan:"Microsoft Office"},
        {keterangan:"HTML & CSS"},  {keterangan:"Javascript ( React Js & Angular JS )"},{keterangan:"PHP ( Laravel & CI )"},
        {keterangan:"Java & Kotlin ( Mobile Appllication )"},  {keterangan:"Golang ( Gorm & Gin )"},{keterangan:"Github"},
    ];

    fun.getPengalaman=(id)=>{
        $('html, body').animate({
            scrollTop: $("#"+id).offset().top
        }, 500);
    }
    
    
});