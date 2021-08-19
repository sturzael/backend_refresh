import { Request, Response } from 'express';

////////////////////////////////
// Controllers
////////////////////////////////

// @desc       Get all chores
// @route      GET /api/v1/chores
// @access     Public
exports.getChores = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'Show all chores' });
};

// @desc       Get a single chores
// @route      GET /api/v1/chores/:id
// @access     Public
exports.getSingleChore = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: `get chore ${req.params.id}` });
};

// @desc       Create a chore
// @route      POST /api/v1/chores
// @access     Private
exports.createChore = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'post new chore' });
};

// @desc       Update a chore
// @route      PUT /api/v1/chores/:id
// @access     Private
exports.updateChore = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'update a chore' });
};

// @desc       Delete a chore
// @route      DELETE /api/v1/chores/:id
// @access     Private
exports.deleteChore = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'delete a chore' });
};
