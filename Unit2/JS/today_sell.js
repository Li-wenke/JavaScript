var mydate = new Date();
today = mydate.getDay();
switch(today)
	{
		case 1:
			document.writeln()("<img src=\'images/Monday.jpg\' border=\'0'\  />");
			break;
		case 2:
			document.writeln("<img src=\'images/Tuesday.jpg\' border=\'0'\ />");
			break;
		case 3:
			document.writeln("<img src=\'images/Wednesday.jpg\' border=\'0'\ />");
			break;
		case 4:
			document.writeln("<img src=\'images/Thursday.jpg\' border=\'0'\  />");
			break;
		case 5:
			document.writeln("<img src=\'images/Friday.jpg\' border=\'0'\  />");
			break;
		case 6:
			document.writeln("<img src=\'images/Saturday.jpg\' border=\'0'\  />");
			break;
		default:
			document.writeln("<img src=\'images/Sunday.jpg\' border=\'0'\  />");
	}