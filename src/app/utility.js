module.exports = {
    
    prettyDate: function(datestring) {
		var d = new Date(datestring);
		var hh = d.getHours();
		var m = d.getMinutes();
		//var s = d.getSeconds();
		var dd = "AM";
		var h = hh;
		if (h >= 12) {
			h = hh-12;
			dd = "PM";
		}
		if (h === 0) {
			h = 12;
		}
		m = m<10?"0"+m:m;

		//s = s<10?"0"+s:s;

		/* if you want 2 digit hours:
		h = h<10?"0"+h:h; */

		var pattern = new RegExp("0?"+hh+":"+m);

		var replacement = h+":"+m;
		/* if you want to add seconds
		replacement += ":"+s;  */
		replacement += " "+dd;
		
		var date = d.toDateString() +' '+replacement;

		return date;
	},

	trimString: function(string, maxLength) {
		//trim the string to the maximum length
		var trimmedString = string.substr(0, maxLength);

		//re-trim if we are in the middle of a word
		trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
		return trimmedString;
	},

	searchWholeWord: function(haystack, needle) {
		var strings = haystack.toLowerCase().split(',').map(function(item){
			return item.trim();
		});
		var word = needle.toLowerCase();
		return strings.indexOf(word) !== -1;
	}
};