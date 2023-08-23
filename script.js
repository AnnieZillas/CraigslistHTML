function generateHTML() {
    var title = document.getElementById('title').value;
    var subtitle = document.getElementById('subtitle').value;
    var description = document.getElementById('description').value;
    var imageOne = document.getElementById('imageOne').value;
    var imageTwo = document.getElementById('imageTwo').value;
    var listHeading = document.getElementById('listHeading').value;
      var CTAText = document.getElementById('CTAText').value;
    var listItems = document.getElementById('listItems').value.split('\n').map(item => `
      <tr>
        <td style="padding-top: 5px;padding-bottom: 5px;">
          <font color="#75CBCF">❤ </font>
          <font face="arial">${item.trim()}</font>
        </td>
      </tr>
    `).join('');
var QualHeading = document.getElementById('QualHeading').value;
    var QualList = document.getElementById('QualList').value.split('\n').map(item => `
      <tr>
        <td style="padding-top: 5px;padding-bottom: 5px;">
          <font color="#75CBCF">❤ </font>
          <font face="arial">${item.trim()}</font>
        </td>
      </tr>
    `).join('');
    var htmlCode = `<table width="100%">
  <tr align="center">
    <th colspan="2">
      <font color="#ce4b78" face="arial" size="6">
        <b>${title}</b>
      </font>
    </th>
  </tr>
  <tr align="center">
    <th colspan="2" style="padding-bottom:10px;padding-top:10px">
      <font color="#595959" face="arial" size="4">
        <b>${subtitle}</b>
      </font>
    </th>
  </tr>
  <tr align="center">
    <td align="right" width="50%"><a href="https://www.joyoflifesurrogacy.com/surrogate-application-form/" rel="nofollow"><img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/Button-2.png" width="180"></a></td>
    <td align="left" width="50%"><a href="https://www.joyoflifesurrogacy.com/contact-us/" rel="nofollow"><img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/Button-1-1.png" width="180"></a></td>
  </tr>
</table>
<br>
<table>
  <tr align="center">
    <td>
      <font face="arial">${description}</font>
    </td>
  </tr>
</table>

<center>
<img src="${imageOne}">
<br>
<img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/divider-1.png">
</center>
<table>
  <tr>
    <td align="left">
      <font color="#ce4b78" face="arial" size="5">
        <b>${listHeading}</b>
      </font>
    </td>
  </tr>
  <tr>
    <th>
    </th>
  </tr>
  ${listItems}
</table>
<br>
<center>
<img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/divider-1.png">
<br>
<img src="${imageTwo}">
<br>
<img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/divider-1.png">
</center>
<br>
<table>
  <tr>
    <td align="left">
      <font color="#ce4b78" face="arial" size="5">
        <b>${QualHeading}</b>
      </font>
    </td>
  </tr>
  <tr>
    <th>
    </th>
  </tr>
  ${QualList}
</table>
<center>
<img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/divider-1.png">
</center>
<table width="100%">
  <tr>
    <th align="center">
  <font color="#595959" face="arial" size="4">
    <b>${CTAText}</b>
  </font>
  </th>
  </tr>
</table>
<br>
<table width="100%">
  <tr align="center">
    <td align="right" width="50%"><a href="https://www.joyoflifesurrogacy.com/surrogate-application-form/" rel="nofollow"><img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/Button-2.png" width="180"></a></td>
    <td align="left" width="50%"><a href="https://www.joyoflifesurrogacy.com/contact-us/" rel="nofollow"><img src="https://www.joyoflifesurrogacy.com/wp-content/uploads/2023/08/Button-1-1.png" width="180"></a></td>
  </tr>
</table>`;

    document.getElementById('output').value = htmlCode;
    document.getElementById('preview').innerHTML = htmlCode;
}

generateHTML();
