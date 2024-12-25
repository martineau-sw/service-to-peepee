walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	let child, next;
	
	let tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\b(software-as-a-service|saas)\b/gi, "big peepee");
	v = v.replace(/\b(platform-as-a-service|paas)\b/gi, "many big peepee")
	v = v.replace(/\b(container-as-a-service|caas)\b/gi, "big peepee (wrapped)")
	v = v.replace(/\b(infrastructure-as-a-service|iaas)\b/gi, "big peepee army");
	v = v.replace(/\b(micro(?:-?))?service(s?)\b/gi, "$1peepee$2");
	
	textNode.nodeValue = v;
}


