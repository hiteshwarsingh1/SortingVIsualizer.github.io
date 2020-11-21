var slider1= document.getElementById('slider1');
var svg= document.getElementById('svgOne');
var svgns = "http://www.w3.org/2000/svg";

slider1.oninput=function(){
    generate();
}
function generate(){
    var all = document.getElementsByTagName('rect');
    while (all[0]){
        all[0].parentNode.removeChild(all[0]);
    }

var wid=10;
arr=[];//global arr
svg.setAttribute("width", (slider1.value*wid)+(slider1.value*2));
var i;
var k;
for (i=0;i<slider1.value;i++){
    
    var hght = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    
    arr.push(hght);
    pos=(i*(wid+2));
    
    var rect = document.createElementNS(svgns,'rect');
    rect.setAttributeNS(null, 'x',pos);
    rect.setAttributeNS(null, 'y', '50');
    rect.setAttributeNS(null, 'height', hght);
    rect.setAttributeNS(null,"id", hght);
    rect.setAttributeNS(null, 'width', wid);
    rect.setAttributeNS(null, 'fill', 'blue');
    document.getElementById('svgOne').appendChild(rect);
    }
}

function show(){
    console.log(arr);
}

function pre_sort(n){
    console.log(n);
    typ=n;//this is global variable
}

async function sort(){

    if(typ==1){
    selection(arr);
    }
    else if(typ==2){
        quicksort(arr,0,arr.length-1);
        console.log(arr);
    }
    else if(typ==3){
        
        console.log(arr);
    }
    else if(typ==4){
        console.log("hey");
        bubble(arr);
    }
    else if(typ==5){
        console.log("un",arr);
        await heapsort(arr,arr.length);
        console.log("heap:",arr);
    }

}

async function sleep(ms) {
    return new Promise(result=>setTimeout(result,ms));
  }
//selection sort***********************************************************
async function selection(arr){
    
    var all_rect= document.getElementsByTagName("rect");
    var n=arr.length;
    var i ;
    var j;
    var temp;
    var spd=10;
    dis();
    for (i=0;i<n;i++){
        for (j=i;j<n;j++){
            com(i,j);
            if (arr[i]<=arr[j]){
                await sleep(spd);
                tru(i,j);
                await sleep(spd);
                nor(i,j);
            }
            else{
                await sleep(spd);
                fls(i,j);
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                all_rect[i].setAttributeNS(null,'height',arr[i]);
                all_rect[j].setAttributeNS(null,'height',arr[j]);
                console.log(arr[i],arr[j]);
                await sleep(spd);
                tru(i,j);
                await sleep(spd);
                nor(i,j);
                
            }
            all_rect[i].setAttributeNS(null,'fill','grey');
            await sleep(spd);

        }
        
    }
    
    en();
    await sleep(spd);
    
}
// bubble sort **********************************************************************
async function bubble(arr){
    var all_rect= document.getElementsByTagName("rect");
    var n=arr.length;
    var i ;
    var j;
    var temp;
    var spd=10;
    dis();
    for (i=0;i<n;i++){
            for (j=n-1;j>i;j--){
            com(i,j);
            if (arr[j]<=arr[j-1]){
                await sleep(spd);
                tru(j,j-1);
                await sleep(spd);
                nor(j,j-1);
            }
            else{
                await sleep(spd);
                fls(j,j-1);
                temp=arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;
                all_rect[j].setAttributeNS(null,'height',arr[j]);
                all_rect[j-1].setAttributeNS(null,'height',arr[j-1]);
                console.log(arr[j],arr[j-1]);
                await sleep(spd);
                tru(j,j-1);
                await sleep(spd);
                nor(j,j-1);
                
            }
            all_rect[i].setAttributeNS(null,'fill','grey');
            await sleep(spd);

        }
        all_rect[i].setAttributeNS(null,'fill','grey');

    }
    
    en();
    await sleep(spd);

}
// quick sort*****************************************************************
async function part(arr ,low , high)
{
    var all_rect= document.getElementsByTagName("rect");
    
    var pivot = arr[high];
    let s = low-1;

    for(var i=low;i<high;i++)
    {   
        
        if(arr[i]<pivot)
        {   
            s=s+1;
            
            var temp = arr[i]; 
            arr[i] = arr[s]; 
            arr[s] = temp;
           
            await sleep(10);
            all_rect[i].setAttributeNS(null,'height',arr[i]);
            all_rect[s].setAttributeNS(null,'height',arr[s]);
        }
        else{
            await sleep(10);
            document.getElementById(arr[i]).setAttributeNS(null,'fill','blue');
            
        }
        
    }

    
    var temp = arr[high]; 
    arr[high] = arr[s+1]; 
    arr[s+1] = temp;

    await sleep(10);
    all_rect[high].setAttributeNS(null,'height',arr[high]);
    all_rect[s+1].setAttributeNS(null,'height',arr[s+1]);
   
    
    return s+1;

}


async function quicksort( arr, low, high)
{
    if(low<high)
    {
      
        let pivot = await part(arr, low, high);
       
        console.log("P:",pivot);
        
        
        await quicksort(arr,low,pivot-1);
        await quicksort(arr,pivot+1,high);
    }
}
//heap sort***************************************
async function heapify(arr, s,i)
{
    var all_rect= document.getElementsByTagName("rect");
    var largest = i; 
    var left = 2*i + 1; 
    var right = 2*i + 2; 

    if (left<s && arr[left]>arr[largest])
    {       
        console.log(arr[left],arr[largest]);
        largest = left;
    }
  
    if (right<s && arr[right] > arr[largest])
    {
        console.log(arr[right],arr[largest]);
        largest = right;
    }
    
    if (largest!=i) 
    {
       
        console.log(arr[i],arr[largest]);
        var temp=arr[i];
        arr[i]=arr[largest];
        arr[largest]=temp;  //swapping for making maximum value as root
        await sleep(10);
        all_rect[i].setAttributeNS(null,'height',arr[i]);
        await sleep(10);
        all_rect[largest].setAttributeNS(null,'height',arr[largest]);
        await heapify(arr,s,largest);
    }
}


async function heapsort(arr, s)
{
    var all_rect= document.getElementsByTagName("rect");
    for (var i=(s/2)-1;i>=0;i--)
    {
        await heapify(arr,s,i);
    }
    for (var i=s-1;i>=0;i--) 
    {   
        var temp=arr[i];
        arr[i]=arr[0];
        arr[0]=temp;
        
        await sleep(10);
        all_rect[i].setAttributeNS(null,'height',arr[i]);
        await sleep(10);
        all_rect[0].setAttributeNS(null,'height',arr[0]);

        await heapify(arr, i, 0);
        
    }   
}

function nor(n,m){
    var all_rect= document.getElementsByTagName("rect");
    all_rect[n].setAttributeNS(null,'fill','blue');
    all_rect[m].setAttributeNS(null,'fill','blue');
}

function com(n,m){
    var all_rect= document.getElementsByTagName("rect");
    all_rect[n].setAttributeNS(null,'fill','grey');
    all_rect[m].setAttributeNS(null,'fill','grey');

}

function tru(i,j){
    var all_rect= document.getElementsByTagName("rect");
    all_rect[i].setAttributeNS(null,'fill','green');
    all_rect[j].setAttributeNS(null,'fill','green');
}

function fls(i,j){
    var all_rect= document.getElementsByTagName("rect");
    all_rect[i].setAttributeNS(null,'fill','red');
    all_rect[j].setAttributeNS(null,'fill','red');
}

function dis(){
    console.log("Disable");
    document.getElementById("bt").disabled = true;
    document.getElementById("slider1").disabled = true;
}

function en(){
    console.log("enable");
    document.getElementById("bt").disabled = false;
    document.getElementById("slider1").disabled = false;
}
