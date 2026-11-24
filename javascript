<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title > Web Applications</title>
</head>

<body>
    <center>
        <h1> WELCOME HOME</h1>
        <p> WELCOME HOME WITH A  WARM GREETINGS AND HAPPY HOME </p>
        <table border ="2" cellpadding="10">
                <tr>
                    <td>
                        <h2>  JAVA</h2><img src="https://tse3.mm.bing.net/th/id/OIP.OH7-_Y0bD2U87SoyrWZt3AHaEK?r=0&pid=Api&h=220&P=0" width="150" height="100",alt="JAVA">
                    </td>
                    <td><h2>
                        PYTHON
                    </h2><img src="https://tse2.mm.bing.net/th/id/OIP.xeoinwuNrrPBMdn8mcm7NwHaHa?r=0&pid=Api&h=220&P=0" width="150" height="100",alt="PYTHON"></td>

                </tr>
                <tr>
                    <td><h2>
                        HTML
                    </h2><img src="https://tse4.mm.bing.net/th/id/OIP.0wsc73i_Cy-4ZJUwC16nFgHaKd?r=0&pid=Api&h=220&P=0" width="150" height="100"></td>
                    <td><h2>
                        JAVASCRIPT
                    </h2><img src="https://tse3.mm.bing.net/th/id/OIP.Ov8Cx9Ukjqo9UZZXtG-UxgHaEo?r=0&pid=Api&h=220&P=0" width="150" height="100"></td>
               </tr>
                 
    
</table>

    </center>
    <script>
        console.log("hellooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        var a=20;
        a=30;
        var a=40;
        console.log("AGE",a);
        let b=20;
        b=70 ;
        console.log("B",b);
        const c=0;
        console.log(c);
        if(a==40 && b==50){
            console.log("SUCCESS")
        }
        else{
            console.log("FAIL")
        }
        function employee(name,com,clg="sece"){
            console.log("Hello,",name,"studied in the  college",clg,"placed in this company",com);
        }
        employee("Ram","HCL")
        employee("SHAM","TATA GROUPS")
        employee("MEOW","SERVICE NOW")
        employee("AIYAA","AUTODESK")
        let data1=function(){
            return "hello java script ";
        }
        console.log(data1());
        let data2=(a,b)=> {
            return a*b;
        } 
        console.log(data2(2,3));
        function sece(callback){
            console.log("wlecome  to sece")
            callback()
        }
        function student(){
            console.log("welcome student ")
        }
        sece(student)
        function whatsapp(callback){
             console.log("welcome to whatsapp")
             callback()
        }
        function notification(){
            console.log("NOTIFICATION FROM WHATSAPP")
        }
        whatsapp(notification)
        let fetch=new Promise((reslove,reject)=>{
            let api=true;
            if(api){
                reslove("Fetched api data ")

            }
            else{
                reject("No data Fetched from api")
            }
        },2000)
        fetch.then(data=>console.log(data))
        let order=new Promise((reslove,reject)=>{
            let food =true;
            if(food){
                reslove("Order received ")

            }
            else{
                setTimeout(()=>{
                reject("Order Not Received")
            },2000)

        }
    })
        order.then(data=>console.log(data))

    </script>
</body>
</html>
