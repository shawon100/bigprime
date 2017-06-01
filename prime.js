exports.primeGenerate=function(x,y)
{
 
 var n=10000000;
 var k=1;
 var l,u,jk;
 var a=new Array(10000000);
 var p=new Array(10000000);
 var segment=[];
 var sg=[];



 var text="";
 var stt="";



function sieve()
{

   
    a.fill(0);
    

    a[0]=1;
    a[1]=1;

    for(i=4;i<=n;i=i+2)
    {
        a[i]=1;
    }
    for(i=3;i<=Math.sqrt(n);i=i+2)
    {
        for(j=i*i;j<=n;j=j+2*i)
        {
            a[j]=1;
        }
    }
    p[0]=2;
    for(i=3;i<=n;i=i+2)
    {
        if(a[i]==0)
        {
            p[k]=i;
            //cout<<p[k]<<endl;
            k++;
        }
    }


}


function segmented_sieve(l,u)
{
    var  root,start,i,j,si;
    sg.fill(0);
    root=Math.sqrt(u)+1;



    for(i=l;i<=u;i++)
    {
        sg.push(i);
    }


    if(l==0)
    {
        sg[1]=0;
    }
    else if(l==1)
    {
        sg[0]=0;
    }




    for(i=0;p[i]<=root;i++)
    {
        si=p[i];
        si=parseInt(si);

        start=si*si;

        if(start<l)
        {
            start=parseInt((l+si-1)/si)*si;
            
        }
        

        for(j=start;j<=u;j=j+si)
        {
            sg[j-l]=0;

        }
    }
    

}


     //test();
     var m,g,c,r,t,l,h,u,w,tc,tx,i,j;

     sieve();



     tc=1;
     segment.fill(0);

     for(tx=1;tx<=tc;tx++)
     {

        //l=document.getElementById('n1').value;
        //u=document.getElementById('n2').value;
        //l=parseInt(l);
        //y=parseInt(u);
        //l=1;
        //u=100;
        l=parseInt(x);
        u=parseInt(y);
        segmented_sieve(l,u);


        for(i=l;i<=u;i++)
        {


            if(sg[i-l]!=0)
            {
                segment.push(sg[i-l]);
            }
        }

        for(i=0;i<segment.length;i++)
        {
            text+=segment[i]+"\n";
            
        }
        segment.fill(0);
        sg.fill(0);
        console.log(text);

        
        
    }
    







}



