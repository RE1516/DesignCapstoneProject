function submitForm()
{
  var data = document.getElementById('form');
  var text = "Welcome "+ data.elements[0].value + "! Thanks for join us, we send you an email ("+data.elements[1].value+")"
  alert(text);
}