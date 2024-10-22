import A4Page from "../components/A4Page";
function Pages({children}) {
  return ( 
    <div className="flex h-full justify-center">
      <A4Page>
        {children}
      </A4Page>
    </div>
   );
}

export default Pages;

