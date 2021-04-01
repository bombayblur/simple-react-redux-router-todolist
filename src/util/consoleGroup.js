export default function( label, collapsed ,...items){
    if(collapsed){
        console.groupCollapsed(label);
        items.forEach(item=>console.log(item));
        console.groupEnd();
    } else {
        console.group(label);
        items.forEach(item=>console.log(item));
        console.groupEnd();
    }
}