/**
 ** Bài 1
 ** Đầu vào:
 * - Ngày, tháng, năm
 ** Xử lý:
 * - Tạo 3 biến ngay, thang, nam
 * - Lấy value người dùng nhập vào gán lần lượt cho 3 biến ngày, thang , nam.
 * - Kiểm tra xem tháng người dùng nhập có bao nhiêu ngày
 *  + Tháng 1, 3, 5, 7, 8, 10, 12 => có 31 ngày
 *  + Tháng 4, 6, 9, 11 => có 30 ngày
 *  + Tháng 2 => có 28 ngày(nếu năm nhuận thì 29 ngày)
 * - Tìm ngày, tháng, năm của ngày tiếp theo
 *  + Ngày tiếp theo là ngày tăng 1 đơn vị
 *   ++ Nếu tăng ngày 1 đơn vị dẫn đến ngày k hợp lệ (lớn hơn số ngày tối đa của tháng/năm đó) thì ngày tiếp theo chính là ngày đầu tiên của tháng sau => ngày = 1 và tháng tăng 1 đơn vị
 *   ++ Nếu tăng tháng 1 đơn vị dẫn đến tháng k hợp lệ (lớn hơn 12) thì ngày tiếp theo chính là ngày đầu tiên của tháng đầu thuộc năm sau => Tháng = 1 và năm tăng 1 đơn vị
 * - Tìm ngày, tháng, năm của ngày trước đó
 *  + Ngày trước đó là ngày giảm 1 đơn vị
 *   ++ Nếu giảm ngày 1 đơn vị dẫn đến ngày k hợp lệ (ngày = 0) thì ngày trước đó là ngày cuối cùng của tháng trước => giảm tháng 1 đơn vị
 *   ++ Nếu giảm tháng 1 đơn vị dẫn đến tháng k hợp lệ (tháng = 0) thì ngày trước đó chính là ngày cuối cùng của năm trước => tháng = 12 và giảm năm 1 đơn vị
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnTimNgay").onclick = function () {
  var ngay = document.getElementById("txtNgay").value * 1;
  var thang = document.getElementById("txtThang").value * 1;
  var nam = document.getElementById("txtNam").value * 1;

  //   Tìm tổng số ngày trong tháng
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      tongSoNgay = 31;
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      tongSoNgay = 30;
      break;
    case 2:
      // Kiểm tra năm nhuận
      if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        tongSoNgay = 29;
      } else {
        tongSoNgay = 28;
      }
  }

  //   Tìm ngày, tháng, năm của ngày tiếp theo
  var ngayTiepTheo = ngay;
  var thangTiepTheo = thang;
  var namTiepTheo = nam;
  ngayTiepTheo++;
  if (ngayTiepTheo > tongSoNgay) {
    ngayTiepTheo = 1;
    thangTiepTheo++;
    if (thangTiepTheo > 12) {
      thangTiepTheo = 1;
      namTiepTheo++;
    }
  }
  var ngayHomSau =
    "Ngày tiếp theo là: " +
    ngayTiepTheo +
    "/" +
    thangTiepTheo +
    "/" +
    namTiepTheo;

  //   Tìm ngày, tháng, năm của ngày trước đó
  var ngayTruocDo = ngay;
  var thangTruocDo = thang;
  var namTruocDo = nam;
  ngayTruocDo--;
  if (ngayTruocDo == 0) {
    ngayTruocDo = tongSoNgay;
    thangTruocDo--;
    if (thangTruocDo == 0) {
      thangTruocDo = 12;
      namTruocDo--;
    }
  }
  var ngayHomTruoc =
    "Ngày trước đó là: " + ngayTruocDo + "/" + thangTruocDo + "/" + namTruocDo;
  var ketQua = "<div>";
  ketQua += ngayHomSau;
  ketQua += "<br>";
  ketQua += ngayHomTruoc;
  ketQua += "</div>";
  document.getElementById("footerTimNgay").innerHTML = ketQua;
  document.getElementById("footerTimNgay").style.color = "red";
  document.getElementById("footerTimNgay").style.fontSize = "20px";
};

/**
 ** Bài 2
 ** Đầu vào:
 * - Tháng, năm
 ** Xử lý:
 * - Tạo 3 biến: ngay, thang, nam
 * - Lấy value người dùng nhập vào gán lần lượt cho 2 biến thang , nam.
 * - Kiểm tra xem tháng người dùng nhập có bao nhiêu ngày
 *  + Tháng 1, 3, 5, 7, 8, 10, 12 => có 31 ngày
 *  + Tháng 4, 6, 9, 11 => có 30 ngày
 *  + Tháng 2 => có 28 ngày(nếu năm nhuận thì 29 ngày)
 */

document.getElementById("btnTimSoNgay").onclick = function () {
  var thang = document.getElementById("txtThangBai2").value * 1;
  var nam = document.getElementById("txtNamBai2").value * 1;
  var ngay, result;
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      ngay = 31;
      result = "Tháng " + thang + " năm " + nam + " có " + ngay + " ngày";
      break;

    case 4:
    case 6:
    case 9:
    case 11:
      ngay = 30;
      result = "Tháng " + thang + " năm " + nam + " có " + ngay + " ngày";
    case 2:
      if ((nam % 4 == 0 && nam % 100 != 0) || nam % 400 == 0) {
        ngay = 29;
        result = "Tháng " + thang + " năm " + nam + " có " + ngay + " ngày";
      } else {
        ngay = 28;
        result = "Tháng " + thang + " năm " + nam + " có " + ngay + " ngày";
      }
  }
  document.getElementById("footerTimSoNgay").innerHTML = result;
  document.getElementById("footerTimSoNgay").style.color = "red";
  document.getElementById("footerTimSoNgay").style.fontSize = "20px";
};

/**
 ** Bài 3
 ** Đầu vào:
 * - Số có 3 chữ số
 ** Xử lý:
 * - Tạo biến so, hangTram, hangChuc, hangDonVi;
 * - Lấy value người dùng nhập vào gán cho biến so
 * - Tách số hàng trăm: Math.floor(so / 100)
 * - Tách số hàng chục: Math.floor(so % 100 / 10)
 * - Tách số hàng đơn vị: so % 10
 * - Đọc hàng trăm
 * - Đọc hàng chục
 * - Đọc hàng đơn vị
 * - Kiểm tra nếu hangChuc == 0 và hangDonVi == 0 => k đọc hàng chục và hàng đơn vị
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnDocSo").onclick = function () {
  var so = document.getElementById("txtso").value * 1;
  var hangTram = Math.floor(so / 100);
  var hangChuc = Math.floor((so % 100) / 10);
  var hangDonVi = so % 10;

  if (so) {
    //   Đọc hàng trăm
    switch (hangTram) {
      case 1:
        hangTram = 100;
        docHangTram = "Một trăm";
        break;
      case 2:
        hangTram = 200;
        docHangTram = "Hai trăm";
        break;
      case 3:
        hangTram = 300;
        docHangTram = "Ba trăm";
        break;
      case 4:
        hangTram = 400;
        docHangTram = "Bốn trăm";
        break;
      case 5:
        hangTram = 500;
        docHangTram = "Năm trăm";
        break;
      case 6:
        hangTram = 600;
        docHangTram = "Sáu trăm";
        break;
      case 7:
        hangTram = 700;
        docHangTram = "Bảy trăm";
        break;
      case 8:
        hangTram = 800;
        docHangTram = "Tám trăm";
        break;
      case 9:
        hangTram = 900;
        docHangTram = "Chín trăm";
        break;
    }

    // Đọc hàng chục
    switch (hangChuc) {
      case 0:
        hangChuc = 0;
        docHangChuc = "lẻ";
        break;
      case 1:
        hangChuc = 10;
        docHangChuc = "mười";
        break;
      case 2:
        hangChuc = 20;
        docHangChuc = "hai mươi";
        break;
      case 3:
        hangChuc = 30;
        docHangChuc = "ba mươi";
        break;
      case 4:
        hangChuc = 40;
        docHangChuc = "bốn mươi";
        break;
      case 5:
        hangChuc = 50;
        docHangChuc = "năm mươi";
        break;
      case 6:
        hangChuc = 60;
        docHangChuc = "sáu mươi";
        break;
      case 7:
        hangChuc = 70;
        docHangChuc = "bảy mươi";
        break;
      case 8:
        hangChuc = 80;
        docHangChuc = "tám mươi";
        break;
      case 9:
        hangChuc = 90;
        docHangChuc = "chín mươi";
        break;
    }

    // Đọc hàng đơn vị
    switch (hangDonVi) {
      case 0:
        hangDonVi = 0;
        docHangDonVi = "";
        break;
      case 1:
        hangDonVi = 1;
        docHangDonVi = "mốt";
        if (hangChuc == 0 || hangChuc == 10) {
          docHangDonVi = "một";
        }
        break;
      case 2:
        hangDonVi = 2;
        docHangDonVi = "hai";
        break;
      case 3:
        hangDonVi = 3;
        docHangDonVi = "ba";
        break;
      case 4:
        hangDonVi = 4;
        docHangDonVi = "bốn";
        break;
      case 5:
        hangDonVi = 5;
        docHangDonVi = "năm";
        if (hangChuc > 0) {
          docHangDonVi = "lăm";
        }
        break;
      case 6:
        hangDonVi = 6;
        docHangDonVi = "sáu";
        break;
      case 7:
        hangDonVi = 7;
        docHangDonVi = "bảy";
        break;
      case 8:
        hangDonVi = 8;
        docHangDonVi = "tám";
        break;
      case 9:
        hangDonVi = 9;
        docHangDonVi = "chín";
        break;
    }

    // Kiểm tra hàng chục và hàng đơn vị
    if (hangChuc == 0 && hangDonVi == 0) {
      docHangChuc = "";
      docHangDonVi = "";
    }
  }
  var ketQua = docHangTram + " " + docHangChuc + " " + docHangDonVi;

  document.getElementById("footerDocSo").innerHTML = ketQua;
  document.getElementById("footerDocSo").style.color = "red";
  document.getElementById("footerDocSo").style.fontSize = "20px";
};

/**
 ** Bài 4:
 ** Đầu vào: toạ độ A(aA,bA), SV1(xSV1,ySV1), SV2(xSV2,ySV2), SV3(xSV3,ySV3)
 ** Xử lý:
 * - Giả sử:
 * - Gán giá trị toạ độ A là toạ độ của trường đại học: (15,20)
 * - Gán giá trị toạ độ SV1, SV2, SV3 lần lượt là toạ độ nhà của sinh viên:
 *  + Sinh viên 1: tên A, có toạ độ nhà là SV1(5,10);
 * => khoangCachSV1 = Math.sqrt((aA - xSV1) * (aA - xSV1) + (bA - ySV1) * (bA - ySV1))
 *  + Sinh viên 2: tên B, có toạ độ nhà là SV2(8,11);
 * => khoangCachSV2 = Math.sqrt((aA - xSV2) * (aA - xSV2) + (bA - ySV2) * (bA - ySV2))
 *  + Sinh viên 3: tên C, có toạ độ nhà là SV3(9,14);
 * => khoangCachSV3 = Math.sqrt((aA - xSV3) * (aA - xSV3) + (bA - ySV3) * (bA - ySV3))
 * - Nếu khoangCachSV1 > khoangCachSV2 > khoangCachSV3 => sinh viên 1 xa nhất
 * - Nếu khoangCachSV2 > khoangCachSV1 > khoangCachSV3 => sinh viên 2 xa nhất
 * - Nếu khoangCachSV3 > khoangCachSV1 > khoangCachSV2 => sinh viên 3 xa nhất
 ** Đầu ra: Thông báo kết quả
 */

document.getElementById("btnIn").onclick = function () {
  // Lay value sinh vien 1
  var tenSV_1 = document.getElementById("txttenSV_1").value;
  var xA = document.getElementById("txttoaDoSV_1__xA").value * 1;
  var yA = document.getElementById("txttoaDoSV_1__yA").value * 1;
  var zA = document.getElementById("txttoaDoSV_1__zA").value * 1;

  // Lay value sinh vien 2
  var tenSV_2 = document.getElementById("txttenSV_2").value;
  var xB = document.getElementById("txttoaDoSV_2__xB").value * 1;
  var yB = document.getElementById("txttoaDoSV_2__yB").value * 1;
  var zB = document.getElementById("txttoaDoSV_2__zB").value * 1;

  // Lay value sinh vien 3
  var tenSV_3 = document.getElementById("txttenSV_3").value;
  var xC = document.getElementById("txttoaDoSV_3__xC").value * 1;
  var yC = document.getElementById("txttoaDoSV_3__yC").value * 1;
  var zC = document.getElementById("txttoaDoSV_3__zC").value * 1;

  // Lay value cua truong
  var xD = document.getElementById("txttoaDoTruong__xD").value * 1;
  var yD = document.getElementById("txttoaDoTruong__yD").value * 1;
  var zD = document.getElementById("txttoaDoTruong__zD").value * 1;

  // Tinh khoang cach sinh vien 1
  var khoangCachSV1 = Math.sqrt(
    (xD - xA) * (xD - xA) + (yD - yA) * (yD - yA) + (zD - zA) * (zD - zA)
  );

  // Tinh khoang cach sinh vien 2
  var khoangCachSV2 = Math.sqrt(
    (xD - xB) * (xD - xB) + (yD - yB) * (yD - yB) + (zD - zB) * (zD - zB)
  );

  // Tinh khoang cach sinh vien 3
  var khoangCachSV3 = Math.sqrt(
    (xD - xC) * (xD - xC) + (yD - yC) * (yD - yC) + (zD - zC) * (zD - zC)
  );

  // So sanh
  var khoangCach;
  if (khoangCachSV1 > khoangCachSV2 && khoangCachSV1 > khoangCachSV3) {
    khoangCach = tenSV_1;
  } else if (khoangCachSV2 > khoangCachSV1 && khoangCachSV2 > khoangCachSV3) {
    khoangCach = tenSV_2;
  } else if (khoangCachSV3 > khoangCachSV1 && khoangCachSV3 > khoangCachSV2) {
    khoangCach = tenSV_3;
  }

  var ketQua = "Sinh viên xa trường nhất là: " + khoangCach;
  document.getElementById("footerSinhVienXaNhat").innerHTML = ketQua;
  document.getElementById("footerSinhVienXaNhat").style.color = "red";
  document.getElementById("footerSinhVienXaNhat").style.fontSize = "20px";
};
