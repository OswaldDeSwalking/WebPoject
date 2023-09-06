function Ivoce (id)
{
   let inputTemp = document.querySelector('input');
   inputTemp.value+=document.getElementById(`${id}`).innerHTML;
}