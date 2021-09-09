import { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Bootcamp = require('../models/Bootcamps');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ErrorResponse = require('../utils/errorResponse');

////////////////////////////////
// Controllers
////////////////////////////////

// @desc       Get all bootcamps
// @route      GET /api/v1/bootcamps
// @access     Public
exports.getBootcamps = async (req: Request, res: Response, next: any) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, data: bootcamps, count: bootcamps.length });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc       Get a single bootcamp
// @route      GET /api/v1/bootcamps/:id
// @access     Public
exports.getSingleBootcamp = async (req: Request, res: Response, next: any) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp)
      next(
        new ErrorResponse(`Bootcamp not found with ID ${req.params.id}`, 404)
      );

    res.status(200).json({ success: true, data: bootcamp });
  } catch (err) {
    // next(err);
    next(new ErrorResponse(`Bootcamp not found with ID ${req.params.id}`, 404));
  }
};

// @desc       Create a bootcamp
// @route      POST /api/v1/bootcamps
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
// @route      PUT /api/v1/bootcamps/:id
// @access     Private
exports.updateBootcamp = async (req: Request, res: Response, next: any) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    });

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc       Delete a bootcamp
// @route      DELETE /api/v1/bootcamps/:id
// @access     Private
exports.deleteBootcamp = async (req: Request, res: Response, next: any) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);

    if (!bootcamp) return res.status(400).json({ success: false });

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
