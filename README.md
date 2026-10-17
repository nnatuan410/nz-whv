# 🇳🇿 New Zealand Working Holiday Visa (Vietnam Scheme) — 1:1 DOM Simulator

Bộ giả lập luyện tập điền đơn tốc độ cao và kiểm thử Tool/Extension Autofill cho **New Zealand Working Holiday Visa (Vietnam Scheme - 200 suất/năm)**, được bóc tách và tái tạo **100% cấu trúc DOM thật** từ hệ thống `onlineservices.immigration.govt.nz`.

---

## ✨ Tính năng nổi bật

1. **Chuẩn 100% Thuộc tính DOM của trang INZ thật (57/57 trường mục tiêu)**
   - Giữ nguyên tuyệt đối `id`, `name`, `type`, `maxlength`, `errorlabel`, và toàn bộ `<option value="...">` (ví dụ: `Vietnam = "237"`) của ASP.NET WebForms (`_ctl0:ContentPlaceHolder1:...`).
   - Hỗ trợ sẵn đối tượng toàn cục `window.nzis` (`UpdateTextBoxErrorLabel`, `UpdateDropdownErrorLabel`, `UpdateDetailBox`, `updateDeportedFields`) và hàm `window.__doPostBack(eventTarget, eventArgument)` để các script/extension Autofill (Tampermonkey, Chrome Extension, Puppeteer/Playwright) chạy thử nghiệm chính xác như trên trang thật.
2. **Đầy đủ quy trình 8 màn hình thực tế**
   - **Màn 1**: Bảng chọn 45 quốc gia (`ContentPlaceHolder1_countryRepeater_createLink_0` .. `_44`) với chế độ đổi trạng thái `VIETNAM: CLOSED / OPEN` để luyện phản xạ F5.
   - **Màn 2**: Trang `Apply Now` (`ContentPlaceHolder1_applyNowButton`).
   - **Màn 3**: Hệ thống **Bot-Shield reCAPTCHA v2 ngẫu nhiên** (xuất hiện 1–2 lần tại các điểm ngẫu nhiên trong lúc nộp đơn, hỗ trợ cả Google reCAPTCHA thật và lưới ảnh mô phỏng).
   - **Màn 4**: Biểu mẫu chính gồm **4 Tab lớn** (`Personal`, `Health`, `Character`, `Working Holiday Specific`) và **3 Sub-tab** (`Personal Details`, `Identification`, `Occupation Details`).
   - **Màn 5**: Trang `Confirm Submit` với 11 điều khoản cam kết (`chk-decl`).
   - **Màn 6**: Trang `Submit - Application Received` với nút `PAY NOW (ONLINE)` (`ContentPlaceHolder1_payAnchor`).
   - **Màn 7**: Cổng thanh toán thẻ quốc tế Visa / MasterCard (`NZD $455.00`).
   - **Màn 8**: Bảng phân tích kết quả & chấm điểm tốc độ săn 200 suất Quota.
3. **Lịch tương tác chuẩn jQuery UI (`#ui-datepicker-div`)**
   - Toàn bộ 7 ô ngày tháng giữ nguyên `<input type="text" class="inz-control inz-datepicker hasDatepicker">` và bọc trong `<span id="...DatePicker"><div class="jq-date-picker">...<img class="ui-datepicker-trigger"></div></span>`.
   - Click vào biểu tượng lịch bên phải ô nhập sẽ mở bảng chọn Ngày / Tháng / Năm và xuất chuỗi chuẩn INZ `"d MM, yy"` (ví dụ: `"18 October, 1998"`).
4. **Thanh công cụ luyện tập (Floating HUD)**
   - Đồng hồ bấm giờ chính xác tới mili-giây (`00:00.00`).
   - Nút **`Auto-Fill Mẫu`** và **`Bỏ Auto-Fill`** giúp điền nhanh hoặc xóa trắng biểu mẫu ngay lập tức.
5. **Single-File Portable (`index.html`)**
   - Toàn bộ biểu tượng SVG (Silver Fern, dấu chấm than đỏ `(!)`, dấu tích xanh/X đỏ trên tab, icon lịch, quốc huy MBIE) được nhúng trực tiếp dưới dạng Data-URI trong `index.html`, chạy độc lập không cần backend.

---

## 🚀 Cách chạy và sử dụng

### Cách 1: Chạy trực tiếp (Offline)
Chỉ cần mở trực tiếp file **`index.html`** bằng trình duyệt (Chrome, Edge, Brave, Firefox).

### Cách 2: Chỉnh sửa mã nguồn & Build lại (Dành cho các bạn cùng phát triển)
Dự án sử dụng Node.js script để đóng gói và kiểm tra tự động toàn bộ 57 thuộc tính ASP.NET:

```bash
# 1. Tạo lại file index.html từ trình đóng gói
node build_full_simulator.js

# 2. Kiểm tra tự động 57/57 thuộc tính ID & Name chuẩn INZ
node verify_fields.js
```

---

## 📋 Bảng tra cứu ID & Name chuẩn cho các bạn viết Tool Autofill

| Phần (Tab) | Tên trường | `id` | `name` | Giá trị mẫu (Vietnam) |
| :--- | :--- | :--- | :--- | :--- |
| **Personal Details** | Family name | `ContentPlaceHolder1_personDetails_familyNameTextBox` | `_ctl0:ContentPlaceHolder1:personDetails:familyNameTextBox` | `NGUYEN` |
| **Personal Details** | Given name 1 | `ContentPlaceHolder1_personDetails_givenName1Textbox` | `_ctl0:ContentPlaceHolder1:personDetails:givenName1Textbox` | `NGOC ANH TUAN` |
| **Personal Details** | Preferred title | `ContentPlaceHolder1_personDetails_titleDropDownList` | `_ctl0:ContentPlaceHolder1:personDetails:titleDropDownList` | `1` (Mr), `2` (Mrs), `3` (Ms), `4` (Miss) |
| **Personal Details** | Gender | `ContentPlaceHolder1_personDetails_genderDropDownList` | `_ctl0:ContentPlaceHolder1:personDetails:genderDropDownList` | `M` / `F` |
| **Personal Details** | Date of birth | `ContentPlaceHolder1_personDetails_dateOfBirthDatePicker_DatePicker` | `_ctl0:ContentPlaceHolder1:personDetails:dateOfBirthDatePicker_DatePicker` | `18 October, 1998` |
| **Personal Details** | Country of birth | `ContentPlaceHolder1_personDetails_CountryDropDownList` | `_ctl0:ContentPlaceHolder1:personDetails:CountryDropDownList` | `237` (Vietnam) |
| **Address & Contact** | Street Number | `ContentPlaceHolder1_addressContactDetails_address_streetNumberTextbox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:streetNumberTextbox` | `123` |
| **Address & Contact** | Street Name | `ContentPlaceHolder1_addressContactDetails_address_address1TextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:address1TextBox` | `Nguyen Hue` |
| **Address & Contact** | Suburb | `ContentPlaceHolder1_addressContactDetails_address_suburbTextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:suburbTextBox` | `Ben Nghe` |
| **Address & Contact** | City | `ContentPlaceHolder1_addressContactDetails_address_cityTextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:cityTextBox` | `Ho Chi Minh` |
| **Address & Contact** | Post Code | `ContentPlaceHolder1_addressContactDetails_address_postalCodeTextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:postalCodeTextBox` | `700000` |
| **Address & Contact** | Country | `ContentPlaceHolder1_addressContactDetails_address_countryDropDownList` | `_ctl0:ContentPlaceHolder1:addressContactDetails:address:countryDropDownList` | `237` (Vietnam) |
| **Address & Contact** | Mobile Phone | `ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberMobileTextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:contactDetails:phoneNumberMobileTextBox` | `84 987654321` |
| **Address & Contact** | Email Address | `ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox` | `_ctl0:ContentPlaceHolder1:addressContactDetails:contactDetails:emailAddressTextBox` | `example@gmail.com` |
| **Address & Contact** | Represented by Agent | `ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist` | `_ctl0:ContentPlaceHolder1:hasAgent:representedByAgentDropdownlist` | `No` |
| **Address & Contact** | Communication Method | `ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList` | `_ctl0:ContentPlaceHolder1:communicationMethod:communicationMethodDropDownList` | `1` (Email) |
| **Address & Contact** | Has Credit Card | `ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist` | `_ctl0:ContentPlaceHolder1:hasCreditCard:hasCreditCardDropDownlist` | `Yes` |
| **Identification** | Passport Number | `ContentPlaceHolder1_identification_passportNumberTextBox` | `_ctl0:ContentPlaceHolder1:identification:passportNumberTextBox` | `C9876543` |
| **Identification** | Confirm Passport | `ContentPlaceHolder1_identification_confirmPassportNumberTextBox` | `_ctl0:ContentPlaceHolder1:identification:confirmPassportNumberTextBox` | `C9876543` |
| **Identification** | Passport Expiry | `ContentPlaceHolder1_identification_passportExpiryDateDatePicker_DatePicker` | `_ctl0:ContentPlaceHolder1:identification:passportExpiryDateDatePicker_DatePicker` | `20 October, 2034` |
| **Identification** | Other ID Type | `ContentPlaceHolder1_identification_otherIdentificationDropdownlist` | `_ctl0:ContentPlaceHolder1:identification:otherIdentificationDropdownlist` | `1` (Driver License), `2` (Birth Cert), `3` (National ID) |
| **Identification** | Date ID Issued | `ContentPlaceHolder1_identification_otherIssueDateDatePicker_DatePicker` | `_ctl0:ContentPlaceHolder1:identification:otherIssueDateDatePicker_DatePicker` | `15 May, 2021` |
| **WHS Specific** | Previous WHV | `ContentPlaceHolder1_workingHolidaySpecific_hasPreviousPermitDropDownList` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:hasPreviousPermitDropDownList` | `No` |
| **WHS Specific** | Sufficient Funds | `ContentPlaceHolder1_workingHolidaySpecific_sufficientFundsDropDownList` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:sufficientFundsDropDownList` | `Yes` |
| **WHS Specific** | Intended Travel Date | `ContentPlaceHolder1_workingHolidaySpecific_intendedTravelDateDatePicker_DatePicker` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:intendedTravelDateDatePicker_DatePicker` | `17 December, 2026` |
| **WHS Specific** | Been to NZ Before | `ContentPlaceHolder1_workingHolidaySpecific_beenToNzBeforeDropDownList` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:beenToNzBeforeDropDownList` | `No` |
| **WHS Specific** | Outward Ticket Funds | `ContentPlaceHolder1_workingHolidaySpecific_outwardTicketDropDownList` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:outwardTicketDropDownList` | `Yes` |
| **WHS Specific** | Specific Requirements | `ContentPlaceHolder1_workingHolidaySpecific_specificRequirementsDropDownList` | `_ctl0:ContentPlaceHolder1:workingHolidaySpecific:specificRequirementsDropDownList` | `Yes` |

*(Danh sách đầy đủ tất cả các trường Health, Character, Occupation xem trong file `all_form_fields.json`)*

---

## 🌐 Hướng dẫn bật GitHub Pages (Chạy thành trang Web Online miễn phí vĩnh viễn)

Sau khi đẩy dự án này lên GitHub:
1. Vào kho lưu trữ (Repository) trên GitHub -> bấm tab **Settings** (Cài đặt).
2. Ở menu bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment** -> **Branch**, chọn nhánh **`main`** (thư mục `/ (root)`) rồi bấm **Save**.
4. Đợi khoảng 30–60 giây, GitHub sẽ cấp cho bạn một đường link web cố định dạng:
   `https://<tên-tài-khoản-của-bạn>.github.io/<tên-repo>/`
   Đường link này **tồn tại vĩnh viễn** và tự động cập nhật mỗi khi các bạn trong nhóm sửa code trên GitHub!
