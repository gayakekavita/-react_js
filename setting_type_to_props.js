-- we set type to the props in the file where we are accepting props .
--to use proptype we have to import it.
--Syntax to set props is :
   function_Component_which_accept_props.propTypes= {
      propname: type 
    }
--Example 
   Navbar.propTypes={

      title:PropTypes.String,
      aboutUs: PropTypes.String,
      count: propTypes.Number
   }
-- when values are not passed by component then we can set default values to it using default "defaultProps" .
    suppose we are calling compnent "Navbar" like as below 
  1.  <Navbar title="Title" aboutUs="About" count={2} />
      in above case we do not need to use defaultProps .
  -- but if we call or render component withut passig its props then we can use defaultProps for it .
  2. <Navbar/>
     so for above component rendering we will use defaultProps to set props and its value  .

      Navbar.defaultProps={

          title='Title',
          aboutUs='About',
          count={3}
      }

  -- when you want to have some specific props and its value passed inside component then we can use 'isRequired' to set it as required props 
     <Navbar title="Title" aboutUs="About"/>
    
     here we want all the props then we can set it as below ::
     Navbar.propTypes={
       title: propTypes.String.isRequired,
       aboutUs: proptypes.String.isRequired,
       count: propTypes.Number.isRequired,
     }
    when Navbar component is rendered without count then it will give error so we have to render it as below :
     <Navbar title="Title" aboutUs="About" count={3}/>

