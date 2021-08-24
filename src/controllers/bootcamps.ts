import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Bootcamp = require('../models/Bootcamps');

////////////////////////////////
// Controllers
////////////////////////////////

// @desc       Get all chores
// @route      GET /api/v1/chores
// @access     Public
exports.getBootcamps = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'Show all chores' });
};

// @desc       Get a single chores
// @route      GET /api/v1/chores/:id
// @access     Public
exports.getSingleBootcamp = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: `get bootcamp ${req.params.id}` });
};

// @desc       Create a bootcamp
// @route      POST /api/v1/chores
// @access     Private
exports.createBootcamp = async (req: Request, res: Response, next: any) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc       Update a bootcamp
// @route      PUT /api/v1/chores/:id
// @access     Private
exports.updateBootcamp = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'update a bootcamp' });
};

// @desc       Delete a bootcamp
// @route      DELETE /api/v1/chores/:id
// @access     Private
exports.deleteBootcamp = (req: Request, res: Response, next: any) => {
  res.status(200).json({ success: true, msg: 'delete a bootcamp' });
};
