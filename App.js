const discells=document.querySelector('.cells')
const diskeys=document.querySelector('.keys')

let answer='super'
answer=answer.toUpperCase()
let mark=[false,false,false,false,false]
let f=0
const alphabets=[
'Q',
'W',
'E',
'R',
'T',
'Y',
'U',
'I',
'O',
'P',
'A',
'S',
'D',
'F',
'G',
'H',
'J',
'K',
'L',
'ENTER',
'Z',
'X',
'C',
'V',
'B',
'N',
'M',
'<<'
]

const board=[
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]
let currow=0;
let curcell=0;
let i=0;

board.forEach((roww,rowwIndex)=>{
    const appender=document.createElement('div')
    appender.setAttribute('id','row-'+rowwIndex)
    roww.forEach((cellu,celluIndex)=>{
     const cel=document.createElement('div')
     cel.setAttribute('id','row-'+rowwIndex+'-col-'+celluIndex)
     cel.classList.add('each_cell')
     appender.append(cel)
    })
    discells.append(appender)
})


const dothis=(alpha)=>{
 addletter(alpha)
}

const addletter=(printo)=>{
    if(printo ==='<<'){
       deleteletter()
       console.log(board)
        return
    }
    else if(printo ==='ENTER'){
        check(currow-1)
        mark[currow-1]=true;
    }
    else{
      const include=document.getElementById('row-'+currow+'-col-'+curcell)
      include.textContent=printo
      board[currow][curcell]=printo
      console.log(board)
      curcell++;
      if(curcell>4){
      curcell=0;
      currow++;
}}
}

const fliptile =((colr,row,col)=>{
   const apply=document.getElementById('row-'+row+'-col-'+col);
  setTimeout(()=>{
    if(colr=='green'){
        apply.classList.add('greenu')
       }
       if(colr=='yellow')
       {
        apply.classList.add('yellowu')
       }
       if(colr=='grey')
        {
            apply.classList.add('greyu')
        }
  },500*col)
})

const check=(rowint)=>{
    let t=0;
    while(t<5){
        let k=0,flag=0;
        const letto=board[rowint][t]
     while(k<5){
        console.log(answer[k]);
       if(letto==answer[k] && t==k){fliptile('green',rowint,t);flag=1;}
       if(letto==answer[k]&&t!=k){fliptile('yellow',rowint,t);flag=1;}
       k++;
     }
     if(flag==0){
         fliptile('grey',rowint,t);
     }
       t++;
    }
}

const deleteletter=()=>{
    if(curcell>0){
    curcell--
    const exclude=document.getElementById('row-'+currow+'-col-'+curcell)
    exclude.textContent=' '
    board[currow][curcell]=' '
}
    else if(curcell==0&&mark[currow-1]==false){
        curcell=4;
        currow--;
        const exclude1=document.getElementById('row-'+currow+'-col-'+curcell)
        exclude1.textContent=' '
        board[currow][curcell]=' '
    }
    }



alphabets.forEach(letter=>{
const  disbutton=document.createElement('button')
disbutton.setAttribute('id',letter)
disbutton.textContent=letter
disbutton.addEventListener('click',()=>dothis(letter))
diskeys.append(disbutton)
})