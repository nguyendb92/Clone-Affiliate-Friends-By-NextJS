
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";

function blockScript(){
   return (
       <>
           <FontAwesomeIcon icon={faChevronLeft} />
           <script type="text/javascript" src="/admin/js/jquery.min.js"></script>
        <script type="text/javascript" src="/admin/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="/admin/js/metisMenu.min.js"></script>
        <script type="text/javascript" src="/admin/js/startmin.js"></script>
       </>
       )
   }

export default blockScript;