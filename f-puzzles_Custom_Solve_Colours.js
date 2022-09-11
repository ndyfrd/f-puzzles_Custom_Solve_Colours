
// ==UserScript==
// @name		 Fpuzzles_KB
// @namespace	 http://tampermonkey.net/
// @version		 1.0
// @description  Enables customisation of solver highlight colours.
// @author		 Ennead
// @match		 https://*.f-puzzles.com/*
// @match		 https://f-puzzles.com/*
// @icon		 data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant		 none
// @run-at		 document-end
// ==/UserScript==



    //-------------------------------------------------------------------//
    //                                                                   //
    //   					 Custom Solver Colours.                      //
    //                                                                   //
    //      Edit below to create custom solving highlight colours.       //
    //      The current colours are the f-puzzles defaults.              //
    //                                                                   //
    //-------------------------------------------------------------------//




const customSolverHighlights = 	[
										  /*1*/      /*2*/      /*3*/       
									  /*Reserved*/ '#A8A8A8', '#000000', 
										  /*4*/      /*5*/      /*6*/       
							            '#FFA0A0', '#FFE060', '#FFFFB0', 
										  /*7*/      /*8*/      /*9*/       
										'#B0FFB0', '#60D060', '#D0D0FF',
								     	  /*10*/     /*11*/     /*12*/      
										'#8080F0', '#FF80FF', '#FFD0D0' 
								];




    			//-------------------------------------//
    			//                                     //
    			//          End of user edits.         //
    			//                                     //
    			//-------------------------------------//








(function() {
	'use strict';

	const doShim = function() {
		customSolverHighlights.splice(0, 0, '#FFFFFF');

		const prevOnKeyDown = document.onkeydown;
		document.onkeydown = function(event) {
			highlightCs = customSolverHighlights;
			prevOnKeyDown(event);
		}
	}

    if (window.grid) {
        doShim();
    } else {
        document.addEventListener('DOMContentLoaded', (event) => {
            doShim();
        });
    }
})();
