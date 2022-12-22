
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                   
  o__ __o        o          o           o         
 <|     v\      <|\        <|>         <|>        
 / \     <\     / \\o      / \         / \        
 \o/       \o   \o/ v\     \o/       o/   \o      
  |         |>   |   <\     |       <|__ __|>     
 / \       //   / \    \o  / \      /       \     
 \o/      /     \o/     v\ \o/    o/         \o   
  |      o       |       <\ |    /v           v\  
 / \  __/>      / \        < \  />             <\ 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
