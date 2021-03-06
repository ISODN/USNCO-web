import * as guide from '../controllers/guideController.js';
import * as tokenChecker from "../controllers/tokenChecker.js";
import express from 'express';
const guideRouter = express.Router();

//guides
guideRouter.get('/get_guide', guide.getGuideList); //grabs all the guides
guideRouter.get('/get_guide/:ID', guide.getGuide); //grabs one guide
guideRouter.post('/add_guide', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.createGuide);
guideRouter.put('/edit_guide/:ID', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.editGuide);
guideRouter.delete('/delete_guide/:ID', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.deleteGuide);

//subsections
guideRouter.get('/get_subpage/:guideID', guide.getSubpageList); //grabs all subpages
guideRouter.get('/get_subpage/:guideID/:subpageID', guide.getSubpage); //grabs one subpage
guideRouter.post('/add_subpage/:guideID', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.createSubpage);
guideRouter.put('/edit_subpage/:guideID/:subpageID', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.editSubpage);
guideRouter.delete('/delete_subpage/:guideID/:subpageID', tokenChecker.loginCheck, tokenChecker.adminCheck, guide.deleteSubpage);

export default guideRouter;