interface ITheme {
  colors :{
    primary:string,
    primary_light:string,
    black:string,
    white:string,
    gray:string,
    gray_light:string,
  }
}
const theme :ITheme= {
  colors :{
    primary:'#e8b273',
    primary_light:'#ebc599',
    black:'#4B4A47',
    white:'#fff',
    gray:'#D9D9D9',
    gray_light:'#F5F5F5'
  }
}

export default theme;