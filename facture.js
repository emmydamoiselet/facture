function calculate(){
		var p1= Number(document.getElementById("p1").value);
		var q1= Number(document.getElementById("q1").value);
		var t1=document.getElementById("t1").value=(p1*q1);
		var p2=Number(document.getElementById("p2").value);
		var q2=Number(document.getElementById("q2").value);
		var t2=document.getElementById("t2").value=(p2*q2);
		var p3=Number(document.getElementById("p3").value);
		var q3=Number(document.getElementById("q3").value);
		var t3=document.getElementById("t3").value=(p3*q3);
		var p4=Number(document.getElementById("p4").value);
		var q4=Number(document.getElementById("q4").value);
		var t4=document.getElementById("t4").value=(p4*q4);
		var p5=Number(document.getElementById("p5").value);
		var q5=Number(document.getElementById("q5").value);
		var t5=document.getElementById("t5").value=(p5*q5);
		var p6=Number(document.getElementById("p6").value);
		var q6=Number(document.getElementById("q6").value);
		var t6=document.getElementById("t6").value=(p6*q6);
		var p7=Number(document.getElementById("p7").value);
		var q7=Number(document.getElementById("q7").value);
		var t7=document.getElementById("t7").value=(p7*q7);
		var p8=Number(document.getElementById("p8").value);
		var q8=Number(document.getElementById("q8").value);
		var t8=document.getElementById("t8").value=(p8*q8);

		
		var R1 =Number(document.getElementById("R1").value);
		var ST1= Number(document.getElementById("ST1").value);
		document.getElementById("ST1").value=(t1+t2+t3+t4+t5+t6+t7+t8);
		var ST1_R1=Number(document.getElementById("ST1_R1").value);
		document.getElementById("ST1_R1").value=(ST1-R1);
		var I1=parseInt(document.getElementById("I1").value+"%");
		var tt1=parseInt(document.getElementById("tt1").value);
		document.getElementById("tt1").value=Math.round((ST1*I1)/100);
		var EXP_m1=Number(document.getElementById("EXP_m1").value);
		var solde=Number(document.getElementById("solde").value);
		document.getElementById("solde").value=(ST1_R1+tt1+EXP_m1);
		}