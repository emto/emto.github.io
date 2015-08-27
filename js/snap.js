window.onload = function(){
  var s = Snap("#svg");
  // Circle with 80px radius
  // var circle = s.circle(90,120,80);
  // Square with 160px side width
  // var square = s.rect(210,40,160,160);
  // Ellipse with 80px vertical radius and 50px horizontal radius
  // var ellipse = s.ellipse(460,120,50,80);

  //E******

  var x = 0;
  var y = 0;
  var e_triangle = s.polygon(x,y,x+30,y,x,x+30).attr({stroke: 'black', fill: '#fff'});
  var e_line = s.line(x,y+30,x,y+90).attr({stroke: 'black'});
  var e_line1 = s.line(x,y+90,x+30,y+90).attr({stroke: 'black'});
  var e_rect = s.rect(x+30,y+75,45,15).attr({stroke: 'black', fill: '#fff'});

  var e_bar_line0 = s.line(x+30,y,x+75,y).attr({stroke: 'black', id: 'e_line'});
  var e_bar_line1 = s.line(x+27,y+3,x+75,y+3).attr({stroke: 'black', id: 'e_line'});
  var e_bar_line2 = s.line(x+24,y+6,x+75,y+6).attr({stroke: 'black', id: 'e_line'});
  var e_bar_line3 = s.line(x+21,y+9,x+75,y+9).attr({stroke: 'black', id: 'e_line'});

  var e_bar_vline = s.line(x+50,y,x+50,y+90).attr({stroke: 'black'});
  var e_circle = s.circle(x+50,x+40,18).attr({stroke: 'black', fill: 'white'});
  var e_circle_line = s.polyline(x+25,y+38,x+30,y+43,x+35,y+38,x+40,y+43,x+45,y+38,x+50,y+43,x+55,y+38,x+60,y+43,x+65,y+38,x+70,y+43,x+75,y+38).attr({stroke: 'black', fill: 'none', strokeWidth: 1.25});

  //******E chevron patterning
  // var e_circle_line0 = s.polyline(35,45,40,50,35,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line1 = s.polyline(40,45,45,50,40,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line2 = s.polyline(45,45,50,50,45,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line3 = s.polyline(50,45,55,50,50,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line4 = s.polyline(55,45,60,50,55,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line2 = s.polyline(60,45,65,50,60,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line3 = s.polyline(65,45,70,50,65,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_circle_line4 = s.polyline(70,45,75,50,70,55).attr({stroke: 'black', fill: 'none', strokeWidth: 1.5});
  // var e_line_g = s.group([e_bar_line0, e_bar_line1, e_bar_line2, e_bar_line3]);

  //M********
  var m_rectangle = s.rect(x+90,y,25,90).attr({stroke: 'black', fill: 'none'});
  var m_line0 = s.line(x+118, y+90, x+118, y).attr({stroke: 'black'});
  var m_line1 = s.line(x+121, y+90, x+121, y).attr({stroke: 'black'});
  var m_line2 = s.line(x+124, y+90, x+124, y).attr({stroke: 'black'});
  var m_triangle = s.polygon(x+90,y+90,x+107.5,y+65.5,x+125,y+90).attr({stroke: 'black', fill: 'white'});
  var m_circle1 = s.circle(x+124, y+14, 15);
  var m_diamond = s.rect(x+110,y+14,40,15).attr({stroke: 'black', fill: 'none'}).transform("r60");

  var m_line3 = s.line(x+145,y+40, x+168, y).attr({stroke: 'black'});
  var m_line4 = s.line(x+142,y+37, x+164, y).attr({stroke: 'black'});
  var m_rect1 = s.rect(x+170,y+15,14,75);
  var m_circle2 = s.circle(x+145,y+40,12).attr({stroke: 'black', fill: '#fff'});
  var m_circle3 = s.circle(x+170,y+14,15).attr({stroke: 'black', fill: '#fff'});

  //I*********
  var i_circle = s.circle(x+210,y+15,15);
  var i_rect = s.rect(x+196,y+15,28,75).attr({stroke: 'black', fill: 'none'});
  var i_line0 = s.line(x+220, y+90, x+220, y+15).attr({stroke: 'black'});
  var i_line1 = s.line(x+216, y+90, x+216, y+15).attr({stroke: 'black'});

  //L*********
  var l_rect0 = s.rect(x+240,y,20,90).attr({stroke: 'black', fill: 'none'});
  var l_tri0 = s.polygon(x+239,y+91,x+280,y+91,x+260,x+70);
  var l_squiggle = s.polyline(x+280,y+90,x+285,y+85,x+290,y+90,x+295,y+85).attr({stroke: 'black', fill: 'none', strokeWidth: 1.25});
  var l_line0 = s.line(x+270, y+80, x+295, y+80).attr({stroke: 'black', fill: 'none'});
  var l_line1 = s.line(x+270, y+83, x+295, y+83).attr({stroke: 'black', fill: 'none'});

  //Y********
  var y_rect = s.rect(x+327.5,y+38,5,52);
  var y_tri0 = s.polygon(x+295,y, x+365,y,x+330,y+40).attr({stroke: 'black', fill: '#fff'});
  var y_tri0 = s.polygon(x+310,y+10, x+350,y+10,x+330,y+30);
  var y_cir0 = s.circle(x+348,y+5,8);
  var y_rect1 = s.rect(x+314,y+85,34, 5);
  var y_line1 = s.line(x+348,y+5, x+368, y-2).attr({stroke: 'black'});
  var y_line0 = s.line(x+330,y+30,x+330,y+88).attr({stroke: 'white'});

  // var myMatrix = new Snap.Matrix();
  // myMatrix.scale(4)
  function weird() {
    $('svg line').each(function(i, el) {
      var s = Snap(el);
      var x1 = el.x1.baseVal.valueAsString;
      var x2 = el.x2.baseVal.valueAsString;
      var y1 = el.y1.baseVal.valueAsString;
      var y2 = el.y2.baseVal.valueAsString;
      var r2 = 3000 + Math.random() * 5000;
      setTimeout(function() {s.animate({x2: x2},2000)}, r2);
      if (el.x1.baseVal.valueAsString!= el.x2.baseVal.valueAsString) {
        s.animate({x2: x1},3000);
      }
      setTimeout(function() {s.animate({y2: y2},2000)}, r2);
      if (el.y1.baseVal.valueAsString!= el.y2.baseVal.valueAsString) {
        s.animate({y2: y1},3000);
      }
    });
  }
  weird();
  // circle.attr({
  //   fill: 'coral',
  //   stroke: 'coral',
  //   strokeOpacity: .3,
  //   strokeWidth: 10
  // });

  // square.attr({
  //   fill: 'lightblue',
  //   stroke: 'lightblue',
  //   strokeOpacity: .3,
  //   strokeWidth: 10
  // });

  // ellipse.attr({
  //   fill: 'mediumturquoise',
  //   stroke: 'mediumturquoise',
  //   strokeOpacity: .2,
  //   strokeWidth: 10
  // });
}
