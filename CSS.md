# CSS
### 1. CSS là gì?
\- *Cascading Style Sheets*  là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu. Cụ thể: Nó có thể thay đổi màu sắc, phong chữ, in đậm, in nghiêng, layout thiết kế v.v..
> Nói nôm na trong thực tế: HTML được ví như là 1 cô gái Nude, chưa được makeup (Nghĩa là chỉ có da với xương thôi ^^). Muốn cho cô gái đó trở nên lộng lẫy, đẹp hơn thì cần phải có 1 số thứ như như son, phấn, áo, quần, nước hoa, giày, guốc v.v... Vậy những thứ làm cho cô gái trở nên xinh đẹp hơn đó được gọi là CSS.
> **Phần mở rộng của tệp tin css là `.css`**. Ví dụ: style.css
### 2. Cú pháp căn bản
```css
vùng chọn {
	thuộc tính: giá trị;
	thuộc tính: giá trị; 
	v.v...
}
```
![enter image description here](https://www.w3schools.com/css/selector.gif)
**Chú ý:** Kết thúc 1 thuộc tính : giá trị thì phải có dấu chấm phẩy (`;`)
### 3. Cách thức hoạt động
\- Chúng ta nên đặt CSS ở trên cùng trước khi nội dung trong cặp thẻ `<body></body>` của HTML được load ra. Nếu như đặt ở sau các thẻ html thì CSS sẽ không có tác dụng.
\- Bởi trình duyệt sẽ đọc nội dung từ trên xuống dưới. Nếu ta đặt CSS ở trên đầu trang thì khi đọc tới nội dung CSS nó sẽ ghi nhớ vào bộ nhớ của trình duyệt và sau đó đọc tiếp các nội dung bên dưới (các thẻ HTML). Gặp đến thẻ HTML nào thì sẽ đối chiếu lại với bộ nhớ và style cho thẻ html đó. 
### 4. Phạm vi hoạt động của CSS
\- **Có câu hỏi đặt ra rằng:** Chúng ta sử dụng CSS như thế nào? Đặt nó ở đâu?
\- Chúng ta có 3 cách để đặt CSS như sau:
#### 4.1. Viết trực  tiếp trong thẻ HTML
\- Thích hợp cho việc xét độ ưu tiên tối cao.
```html
<h1 style="color: red; font-size: 20px">Hoc CSS</h1>
```
#### 4.2. Nhúng trực tiếp vào trong file HTML  (Inline Styles)
\- Chúng ta có thể đặt bất cứ ở đâu trong file HTML, nhưng cách tốt nhất hãy đặt nó ở trong nội dung của cặp thẻ `<head></head>`
\- Thích hợp cho việc viết 1 đoạn CSS ngắn
```html
<head>
	<title>Hoc CSS</title>
	<style>
	h1{
		color: red;
		font-size: 20px;
	}
	</style>
</head>
<body>
	<h1>Hoc CSS</h1>
</body>
```
#### 4.3. Tạo 1 file riêng và sau đó liên kết vào trang HTML (External Styles)
\- Thích hợp cho việc chèn nhiều đoạn CSS. **Cách này hay dùng trong thực tế**
\- Sử dụng cú pháp sau để liên kết 1 file css vào trong file html
```html
<link href="đường dẫn đến file css" rel="stylesheet" type="text/css">
```
> Về việc tạo 1 file CSS riêng thì ta củng có cách nhúng 1 file CSS vào bên trong 1 file CSS. Cú pháp:
> `@import "đường dẫn file css";`
> **Cách này hay dùng trong thực tế**
### 5. Độ ưu tiên về cách đặt file CSS
\- Lý do chúng ta có 3 cách đặt file như vậy là vì: Độ ưu tiên của 3 cách như trên sẽ khác nhau. Chúng ta sẽ sắp xếp nó từ cấp mạnh nhất đến cấp thấp nhất như sau: **4.1 > 4.2 > 4.3**
\- Ở đây mục 4.1 là cấp mạnh nhất. Bởi vì nó viết trực tiếp vào trong thẻ HTML cho nên nó là mạnh nhất. Tiếp đến là mục 4.2 sẽ mạnh nhì và tiếp đến là mục 4.3 sẽ là yếu nhất.
\- Vậy mạnh nhất và yếu nhất ở đây là sao? Ở đây muốn nhắc đến độ ưu tiên. Giả sử chúng ta đều style cho cùng 1 element, thì trình duyệt sẽ hiển thị định dạng theo độ ưu tiên, cái nào mạnh nhất thì hiển thị cái đó, cái yếu còn lại không được hiển thị.
> Nhưng trong thực tế người ta hay tạo ra 1 file css riêng và nhúng vào tệp tin HTML để dễ quản lý hơn. Bởi vì sau này CSS sẽ rất dài  nếu như ta viết trực tiếp vào file HTML thì thật sự không tốt. 
> Nhưng về mặt hiệu năng thì việc viết CSS vào trong file HTML cho ta hiệu năng tải trang nhanh nhất :)
### 6. Tìm hiểu về bộ chọn selector
\- Tham khảo: [CSS](http://hocwebchuan.com/reference/cssSection/se_selector.php) và [CSS3](http://hocwebchuan.com/reference/cssSection/css3/se_selector.php)
### 7. Các thuộc tính và giá trị cơ bản nhất hay dùng
- **1. TEXT**
	- direction: rtl, ltr
	- font-family
	- font-style 
	- font-size
	- font-weight
	- font
	- @font-face
	- color
	- vertical-align: text-top, text-bottom, middle, sub, supper
	- text-align: left, right,  center
	- text-decoration: underline, none, line-through (ít dùng)
	- text-transform: capitalize, uppercase, lowercase
	- text-indent
	- text-shadown
	- line-height
	- letter-spacing
	- word-spacing
*Nghiên cứu thêm:* list-style, white-space
*Link*: [enter link description here](https://www.w3schools.com/css/css_text.asp)
- **2. BORDER**
	- border
	- border-left[color | style | width]
	- border-top[color | sytle | width]
	- border-right[color | style | width]
	- border-bottom[color | style | width]
	- border-radius
*Nghiên cứu thêm:* [Outline](https://www.w3schools.com/css/css_outline.asp)
*Link*: [enter link description here](https://www.w3schools.com/css/css_border.asp)
- **3. BACKGROUND**
	- background-color
	- background-image
	- background-position
	- background-repeat
	- background-attachment
	- background
	- **Đặc biệt chú ý: rgba**
*Link*: [enter link description here](https://www.w3schools.com/css/css_background.asp)
- **4. MARGIN & PADDING**
	- margin-left
	- margin-top
	- margin-right
	- margin-bottom
	- margin
	- padding-left
	- padding-top
	- padding-right
	- padding-bottom
	- padding
	- **Đặc biệt chú ý: box-sizing**
*Link*: [Margin](https://www.w3schools.com/css/css_margin.asp), [Padding](https://www.w3schools.com/css/css_padding.asp)
- **5. PSEUDO CLASSES**
	- ***Link***
	- :active
	- :hover
	- :visited
	- :link (ít dùng)
	- :target (nên xem qua)
	- ***Form***
	- :focus 
	- :checked
	- :disabled
	- :empty
	- :enabled
	- :readonly
	- ***Position***
	- :nth-child(n)
	- :nth-of-type(n)
	- :nth-last-child(n)
	- :nth-last-of-type(n)
-  **PSEUDO ELEMENT**
	-  ::after
	-  ::before
	-  ::first-letter
	-  ::selector  
	-  ::first-line (ít dùng)
*Link*: [Pseudo element & classes](https://www.w3schools.com/css/css_pseudo_elements.asp)
- **6. LAYOUT (ADVANCED)**
> Phải có kiến thức về các thẻ: `<div></div>`,  `<section></section>`, `<header></header>`, `<footer></footer>`, `<nav></nav>`, `<article></article>`, `<aside></aside>`, `<figure></figure>`, `<figcaption></figcaption>`
> 
> Phải nắm chắt đươc class và id
> Tìm hiểu về tag `<span></span>`
> Phân biệt và ghi nhớ thẻ inline-element hay block-element

	- **6.1. HEIGHT & WIDTH**
	- max-height
	- min-height
	- height
	- max-width
	- min-width
	- width
	- ***6.2. POSITION***
	- float: left, right
	- position: absolute, relative, fixed
	- z-index
	- ***6.3. DISPLAY***
	- display: none, block, inline-block
	- visibility: hidden, visible
	- overflow: hidden, auto
	- opacity
	- box-shadow
	
***Làm bài tập:*** [Position](https://www.w3schools.com/css/css_positioning.asp), [Float](https://www.w3schools.com/css/css_float.asp), [Block & inline](https://www.w3schools.com/css/css_inline-block.asp), [Dropdown menu](https://www.w3schools.com/css/css_dropdowns.asp), [Tooltip](https://www.w3schools.com/css/css_tooltip.asp), [Image gallery](https://www.w3schools.com/css/css_image_gallery.asp), [Form](https://www.w3schools.com/css/css_form.asp)

### 8. CSS3
Tìm hiểu hiệu ứng: animations, transitions, shadows, tranforms,  gradient, background
Tìm hiểu về function: calc, attr