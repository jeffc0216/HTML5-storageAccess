function storageAccess(id){
	var storage = localStorage;

	var key = document.getElementById('keyText').value;
	var value = document.getElementById('valueText').value;

	switch(id){
		case 0:
			storage.setItem(key,value);
			break;
		case 1:
			var item = storage.getItem(key,value);
			alert(item);
			break;
		case 2:
			storage.removeItem(key,value);
			break;
		case 3:
			storage.clear();
			break;

		default:
			alert('input 0,1,2,3 please!');
	}//end of switch
	alert(storage.length);

}