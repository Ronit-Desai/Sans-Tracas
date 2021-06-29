import { MinimalStim } from './core-2020.1.js';
import { WindowMixin } from './core-2020.1.js';
import { mix, toNumerical, getPositionFromObject, toString, to_px, IsPointInsidePolygon, to_pixiPoint, to_unit } from './util-2020.1.js';
import { Color } from './util-2020.1.js';
import { ColorMixin } from './util-2020.1.js';
import { PsychoJS } from './core-2020.1.js';
import { Clock } from './util-2020.1.js';

/**
 * Base class for all visual stimuli.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class VisualStim extends mix(MinimalStim).with(WindowMixin)
{
	constructor({
								name,
								win,
								units,
								ori = 0.0,
								opacity = 1.0,
								pos = [0, 0],
								size,
								autoDraw,
								autoLog
	} = {})
	{
		super({win, name, autoDraw, autoLog});
		this._addAttributes(VisualStim, units, ori, opacity, pos, size);
		this._needUpdate = true;
	}
	refresh()
	{
		this._needUpdate = true;
	}
	setSize(size, log = false)
	{
		if (typeof size !== 'undefined') {
			size = toNumerical(size);
			if (!Array.isArray(size))
				size = [size, size];
		}
		this._setAttribute('size', size, log);
		this._needUpdate = true;
	}
	setOri(ori, log = false)
	{
		this._setAttribute('ori', ori, log);
		let radians = ori * 0.017453292519943295;
		this._rotationMatrix = [[Math.cos(radians), -Math.sin(radians)],
			[Math.sin(radians), Math.cos(radians)]];
		this._needUpdate = true;
	}
	setPos(pos, log = false)
	{
		this._setAttribute('pos', toNumerical(pos), log);
		this._needUpdate = true;
	}
	setOpacity(opacity, log = false)
	{
		this._setAttribute('opacity', opacity, log);
		this._needUpdate = true;
	}
}

/**
 * Image Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class ImageStim extends mix(VisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		image,
		mask,
		pos,
		units,
		ori,
		size,
		color = new Color('white'),
		opacity = 1.0,
		contrast = 1.0,
		texRes = 128,
		depth = 0,
		interpolate = false,
		flipHoriz = false,
		flipVert = false,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this.psychoJS.logger.debug('create a new ImageStim with name: ', name);
		this._addAttributes(ImageStim, image, mask, color, contrast, texRes, interpolate, depth, flipHoriz, flipVert);
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	setImage(image, log = false) {
		const response = { origin: 'ImageStim.setImage', context: 'when setting the image of ImageStim: ' + this._name };
		try {
			if (typeof image === 'undefined') {
				this.psychoJS.logger.warn('setting the image of ImageStim: ' + this._name + ' with argument: undefined.');
				this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: undefined');
			}
			else {
				if (typeof image === 'string')
					image = this.psychoJS.serverManager.getResource(image);
				if (!(image instanceof HTMLImageElement)) {
					throw 'the argument: ' + image.toString() + ' is not an image" }';
				}
				this.psychoJS.logger.debug('set the image of ImageStim: ' + this._name + ' as: src= ' + image.src + ', size= ' + image.width + 'x' + image.height);
			}
			this._setAttribute('image', image, log);
			this._needUpdate = true;
		}
		catch (error) {
			throw Object.assign(response, { error });
		}
	}
	setMask(mask, log = false) {
		const response = { origin: 'ImageStim.setMask', context: 'when setting the mask of ImageStim: ' + this._name };
		try {
			if (typeof mask === 'undefined') {
				this.psychoJS.logger.warn('setting the mask of ImageStim: ' + this._name + ' with argument: undefined.');
				this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: undefined');
			}
			else {
				if (typeof mask === 'string')
					mask = this.psychoJS.serverManager.getResource(mask);
				if (!(mask instanceof HTMLImageElement)) {
					throw 'the argument: ' + mask.toString() + ' is not an image" }';
				}
				this.psychoJS.logger.debug('set the mask of ImageStim: ' + this._name + ' as: src= ' + mask.src + ', size= ' + mask.width + 'x' + mask.height);
			}
			this._setAttribute('mask', mask, log);
			this._needUpdate = true;
		}
		catch (error) {
			throw Object.assign(response, { error });
		}
	}
	setFlipVert(flipVert, log = false) {
		this._setAttribute('flipVert', flipVert, log);
		this._needUpdate = true;
	}
	setFlipHoriz(flipHoriz, log = false) {
		this._setAttribute('flipHoriz', flipHoriz, log);
		this._needUpdate = true;
	}
	contains(object, units)
	{
		if (typeof this._image === 'undefined')
			return false;
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'ImageStim.contains', context : 'when determining whether ImageStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		let pos_px = to_px(this.pos, this.units, this._win);
		const displaySize = this._getDisplaySize();
		const size_px = to_px(displaySize, this.units, this._win);
		const polygon_px = [
			[pos_px[0] - size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] + size_px[1] / 2],
			[pos_px[0] - size_px[0] / 2, pos_px[1] + size_px[1] / 2]];
		return IsPointInsidePolygon(objectPos_px, polygon_px);
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._pixi = undefined;
		if (typeof this._image === 'undefined')
			return;
		this._texture = new PIXI.Texture(new PIXI.BaseTexture(this._image));
		this._pixi = new PIXI.Sprite(this._texture);
		this._pixi.zOrder = this.depth;
		if (typeof this._mask !== 'undefined') {
			this._maskTexture = new PIXI.Texture(new PIXI.BaseTexture(this._mask));
			this._pixi.mask = new PIXI.Sprite(this._maskTexture);
			this._pixi.mask.anchor.x = 0.5;
			this._pixi.mask.anchor.y = 0.5;
			this._pixi.addChild(this._pixi.mask);
		}
		if (this._texture.width === 0) {
			this._needUpdate = true;
			return;
		}
		this._pixi.alpha = this.opacity;
		const displaySize = this._getDisplaySize();
		const size_px = to_px(displaySize, this.units, this.win);
		var scaleX = size_px[0] / this._texture.width;
		var scaleY = size_px[1] / this._texture.height;
		this._pixi.scale.x = this.flipHoriz ? -scaleX : scaleX;
		this._pixi.scale.y = this.flipVert ? scaleY : -scaleY;
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.rotation = this.ori * Math.PI / 180;
		this._pixi.anchor.x = 0.5;
		this._pixi.anchor.y = 0.5;
	}
	_getDisplaySize()
	{
		let displaySize = this.size;
		if (typeof displaySize === 'undefined')
		{
			const textureSize = [this._texture.width, this._texture.height];
			displaySize = to_unit(textureSize, 'pix', this.win, this.units);
		}
		return displaySize;
	}
}

/**
 * Movie Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class MovieStim extends VisualStim {
	constructor({
		name,
		win,
		movie,
		pos,
		units,
		ori,
		size,
		color = new Color('white'),
		opacity = 1.0,
		contrast = 1.0,
		interpolate = false,
		flipHoriz = false,
		flipVert = false,
		loop = false,
		volume = 1.0,
		noAudio = false,
		autoPlay = true,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this.psychoJS.logger.debug('create a new MovieStim with name: ', name);
		this._addAttributes(MovieStim, movie, color, contrast, interpolate, flipHoriz, flipVert, loop, volume, noAudio, autoPlay);
		const videoElement = document.createElement('video');
		this._hasFastSeek = (typeof videoElement.fastSeek === 'function');
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	setMovie(movie, log = false) {
		const response = { origin: 'MovieStim.setMovie', context: 'when setting the movie of MovieStim: ' + this._name };
		try {
			if (typeof movie === 'undefined') {
				this.psychoJS.logger.warn('setting the movie of MovieStim: ' + this._name + ' with argument: undefined.');
				this.psychoJS.logger.debug('set the movie of MovieStim: ' + this._name + ' as: undefined');
			}
			else {
				if (typeof movie === 'string')
					movie = this.psychoJS.serverManager.getResource(movie);
				if (!(movie instanceof HTMLVideoElement))
					throw 'the argument: ' + movie.toString() + ' is not a video" }';
				this.psychoJS.logger.debug(`set the movie of MovieStim: ${this._name} as: src= ${movie.src}, size= ${movie.videoWidth}x${movie.videoHeight}, duration= ${movie.duration}s`);
			}
			this._setAttribute('movie', movie, log);
			this._movie.onended = () => { this.status = PsychoJS.Status.FINISHED; };
			this._needUpdate = true;
		}
		catch (error) {
			throw Object.assign(response, { error });
		}
	}
	setVolume(volume, log = false) {
		this._setAttribute('volume', volume, log);
		this._needUpdate = true;
	}
	setNoAudio(noAudio, log = false) {
		this._setAttribute('noAudio', noAudio, log);
		this._needUpdate = true;
	}
	setFlipVert(flipVert, log = false) {
		this._setAttribute('flipVert', flipVert, log);
		this._needUpdate = true;
	}
	setFlipHoriz(flipHoriz, log = false) {
		this._setAttribute('flipHoriz', flipHoriz, log);
		this._needUpdate = true;
	}
	reset(log = false) {
		this.status = PsychoJS.Status.NOT_STARTED;
		this._movie.pause();
		if (this._hasFastSeek) this._movie.fastSeek(0);
	}
	play(log = false) {
		this.status = PsychoJS.Status.STARTED;
		this._movie.play();
	}
	pause(log = false) {
		this.status = PsychoJS.Status.STOPPED;
		this._movie.pause();
	}
	stop(log = false) {
		this.status = PsychoJS.Status.STOPPED;
		this._movie.pause();
		if (this._hasFastSeek) this._movie.fastSeek(0);
	}
	seek(timePoint, log = false) {
		if (timePoint < 0 || timePoint > this._movie.duration) {
			throw {
				origin: 'MovieStim.seek',
				context: `when seeking to timepoint: ${timePoint} of MovieStim: ${this._name}`,
				error: `the timepoint does not belong to [0, ${this._movie.duration}`
			};
		}
		if (this._hasFastSeek) this._movie.fastSeek(timePoint);
	}
	contains(object, units) {
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined') {
			throw {
				origin: 'MovieStim.contains',
				context: `when determining whether MovieStim: ${this._name} contains object: ${toString(object)}`,
				error: 'unable to determine the position of the object'
			};
		}
		let pos_px = to_px(this.pos, this.units, this._win);
		let size_px = to_px(this.size, this.units, this._win);
		const polygon_px = [
			[pos_px[0] - size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] - size_px[1] / 2],
			[pos_px[0] + size_px[0] / 2, pos_px[1] + size_px[1] / 2],
			[pos_px[0] - size_px[0] / 2, pos_px[1] + size_px[1] / 2]];
		return IsPointInsidePolygon(objectPos_px, polygon_px);
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._pixi = undefined;
		if (typeof this._movie === 'undefined')
			return;
		this._texture = PIXI.Texture.fromVideo(this._movie);
		this._pixi = new PIXI.Sprite(this._texture);
		if (this._texture.width === 0) {
			this._needUpdate = true;
			return;
		}
		this._movie.muted = this._noAudio;
		this._movie.volume = this._volume;
		this._texture.baseTexture.autoPlay = this.autoPlay;
		this._movie.loop = this._loop;
		this._pixi.alpha = this.opacity;
		let stimSize = this.size;
		if (typeof stimSize === 'undefined') {
			const textureSize = [this._texture.width, this._texture.height];
			stimSize = to_unit(textureSize, 'pix', this.win, this.units);
		}
		const size_px = to_px(stimSize, this.units, this.win);
		const scaleX = size_px[0] / this._texture.width;
		const scaleY = size_px[1] / this._texture.height;
		this._pixi.scale.x = this.flipHoriz ? -scaleX : scaleX;
		this._pixi.scale.y = this.flipVert ? scaleY : -scaleY;
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.rotation = this.ori * Math.PI / 180;
		this._pixi.anchor.x = 0.5;
		this._pixi.anchor.y = 0.5;
	}
}

/**
 * Basic Shape Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class ShapeStim extends mix(VisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		lineWidth = 1.5,
		lineColor = new Color('white'),
		fillColor,
		opacity = 1.0,
		vertices = [[-0.5, 0], [0, 0.5], [0.5, 0]],
		closeShape = true,
		pos = [0, 0],
		size = 1.0,
		ori = 0.0,
		units,
		contrast = 1.0,
		depth = 0,
		interpolate = true,
		autoDraw,
		autoLog
	} = {})
	{
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this._pixiPolygon_px = undefined;
		this._needVertexUpdate = true;
		this._vertices_px = undefined;
		this._addAttributes(ShapeStim, lineWidth, lineColor, fillColor, vertices, closeShape, contrast, depth, interpolate);
	}
	refresh()
	{
		super.refresh();
		this._needVertexUpdate = true;
	}
	setSize(size, log = false)
	{
		super.setSize(size, log);
		this._needVertexUpdate = true;
	}
	setLineWidth(lineWidth, log = false)
	{
		this._setAttribute('lineWidth', lineWidth, log);
		this._needUpdate = true;
	}
	setLineColor(lineColor, log = false)
	{
		this._setAttribute('lineColor', lineColor, log);
		this._needUpdate = true;
	}
	setFillColor(fillColor, log = false)
	{
		this._setAttribute('fillColor', fillColor, log);
		this._needUpdate = true;
	}
	setVertices(vertices, log = false)
	{
		const response = {
			origin: 'ShapeStim.setVertices',
			context: 'when setting the vertices of ShapeStim: ' + this._name
		};
		this._psychoJS.logger.debug('set the vertices of ShapeStim:', this.name);
		try
		{
			if (typeof vertices === 'string')
			{
				if (vertices in ShapeStim.KnownShapes)
					vertices = ShapeStim.KnownShapes[vertices];
				else
					throw 'unknown shape';
			}
			this._setAttribute('vertices', vertices, log);
			this._needVertexUpdate = true;
			this._needUpdate = true;
		}
		catch (error)
		{
			throw Object.assign(response, { error: error });
		}
	}
	contains(object, units) {
		this._psychoJS.logger.debug('test whether BaseShameStim:', this.name, 'contains object: ', ('name' in object) ? object.name : object);
		const objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'ShapeStim.contains', context : 'when determining whether BaseShameStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		const pos_px = to_px(this.pos, this.units, this.win);
		const polygon_px = this._vertices_px.map(v => [v[0] + pos_px[0], v[1] + pos_px[1]]);
		return IsPointInsidePolygon(objectPos_px, polygon_px);
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._getPolygon();
		this._pixi = undefined;
		if (typeof this._pixiPolygon_px === 'undefined')
			return;
		this._pixi = new PIXI.Graphics();
		this._pixi.lineStyle(this._lineWidth, this._lineColor.int, this._opacity, 0.5);
		if (typeof this._fillColor !== 'undefined')
			this._pixi.beginFill(this._fillColor.int, this._opacity);
		this._pixi.drawPolygon(this._pixiPolygon_px);
		if (typeof this._fillColor !== 'undefined')
			this._pixi.endFill();
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.rotation = this.ori * Math.PI / 180.0;
	}
	_getPolygon() {
		if (!this._needVertexUpdate)
			return;
		this._needVertexUpdate = false;
		console.log('>>>>>>>>> CREATING PIXI POLYGON!!!!');
		this._getVertices_px();
		let coords_px = [];
		for (const vertex_px of this._vertices_px)
			coords_px.push.apply(coords_px, vertex_px);
		if (coords_px.length >= 6 && this._closeShape) {
			const n = coords_px.length;
			if (coords_px[0] !== coords_px[n - 2] || coords_px[1] !== coords_px[n - 1]) {
				coords_px.push(coords_px[0]);
				coords_px.push(coords_px[1]);
			}
		}
		this._pixiPolygon_px = new PIXI.Polygon(coords_px);
		return this._pixiPolygon_px;
	}
	_getVertices_px()
	{
		let flip = [1.0, 1.0];
		if ('_flipHoriz' in this && this._flipHoriz)
			flip[0] = -1.0;
		if ('_flipVert' in this && this._flipVert)
			flip[1] = -1.0;
		this._vertices_px = this._vertices.map( v => to_px([v[0] * this._size[0] * flip[0], v[1] * this._size[1] * flip[1]], this._units, this._win) );
		return this._vertices_px;
	}
}
ShapeStim.KnownShapes = {
	cross: [
		[-0.1, +0.5],
		[+0.1, +0.5],
		[+0.1, +0.1],
		[+0.5, +0.1],
		[+0.5, -0.1],
		[+0.1, -0.1],
		[+0.1, -0.5],
		[-0.1, -0.5],
		[-0.1, -0.1],
		[-0.5, -0.1],
		[-0.5, +0.1],
		[-0.1, +0.1]
	],
	star7: [
		[0.0,0.5],
		[0.09,0.18],
		[0.39,0.31],
		[0.19,0.04],
		[0.49,-0.11],
		[0.16,-0.12],
		[0.22,-0.45],
		[0.0,-0.2],
		[-0.22,-0.45],
		[-0.16,-0.12],
		[-0.49,-0.11],
		[-0.19,0.04],
		[-0.39,0.31],
		[-0.09,0.18]
	]
};

/**
 * Polygonal Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Polygon extends ShapeStim
{
	constructor({
								name,
								win,
								lineWidth = 1.5,
								lineColor = new Color('white'),
								fillColor,
								opacity = 1.0,
								edges = 3,
								radius = 0.5,
								pos = [0, 0],
								size = 1.0,
								ori = 0.0,
								units,
								contrast = 1.0,
								depth = 0,
								interpolate = true,
								autoDraw,
								autoLog
							} = {})
	{
		super({ name, win, lineWidth, lineColor, fillColor, opacity, pos, ori, size, units, contrast, depth, interpolate, autoDraw, autoLog });
		this._psychoJS.logger.debug('create a new Polygon with name: ', name);
		this._addAttributes(Polygon, edges, radius);
		this._updateVertices();
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	setRadius(radius, log = false)
	{
		this._psychoJS.logger.debug('set the radius of Polygon: ', this.name, 'to: ', radius);
		this._setAttribute('radius', radius, log);
		this._updateVertices();
	}
	setEdges(edges, log = false)
	{
		this._psychoJS.logger.debug('set the edges of Polygon: ', this.name, 'to: ', edges);
		this._setAttribute('edges', Math.round(edges), log);
		this._updateVertices();
	}
	_updateVertices()
	{
		this._psychoJS.logger.debug('update the vertices of Polygon: ', this.name);
		const angle = 2.0 * Math.PI / this._edges;
		const vertices = [];
		for (let v = 0; v < this._edges; ++v)
			vertices.push([ Math.sin(v * angle) * this._radius, Math.cos(v * angle) * this._radius ]);
		this.setVertices(vertices);
	}
}

/**
 * Rectangular Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Rect extends ShapeStim
{
	constructor({
		name,
		win,
		lineWidth = 1.5,
		lineColor = new Color('white'),
		fillColor,
		opacity = 1.0,
		width = 0.5,
		height = 0.5,
		pos = [0, 0],
		size = 1.0,
		ori = 0.0,
		units,
		contrast = 1.0,
		depth = 0,
		interpolate = true,
		autoDraw,
		autoLog
	} = {})
	{
		super({ name, win, lineWidth, lineColor, fillColor, opacity, pos, ori, size, units, contrast, depth, interpolate, autoDraw, autoLog });
		this._psychoJS.logger.debug('create a new Rect with name: ', name);
		this._addAttributes(Rect, width, height);
		this._updateVertices();
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	setWidth(width, log = false)
	{
		this._psychoJS.logger.debug('set the width of Rect: ', this.name, 'to: ', width);
		this._setAttribute('width', width, log);
		this._updateVertices();
	}
	setHeight(height, log = false)
	{
		this._psychoJS.logger.debug('set the height of Rect: ', this.name, 'to: ', height);
		this._setAttribute('height', height, log);
		this._updateVertices();
	}
	_updateVertices()
	{
		this._psychoJS.logger.debug('update the vertices of Rect: ', this.name);
		const halfWidth = this._width / 2.0;
		const halfHeight = this._height / 2.0;
		this.setVertices([
			[-halfWidth, -halfHeight],
			[halfWidth, -halfHeight],
			[halfWidth, halfHeight],
			[-halfWidth, halfHeight]
		]);
	}
}

/**
 * Slider Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class Slider extends mix(VisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		pos,
		size,
		ori,
		units = 'height',
		color = new Color('LightGray'),
		contrast = 1.0,
		opacity,
		style = [Slider.Style.RATING],
		ticks = [1,2,3,4,5],
		labels = [],
		labelHeight,
		granularity = 0,
		flip = false,
		readOnly = false,
		fontFamily = 'Helvetica',
		bold = true,
		italic = false,
		fontSize,
		autoDraw,
		autoLog
	} = {}) {
		super({ name, win, units, ori, opacity, pos, size, autoDraw, autoLog });
		this._needMarkerUpdate = false;
		this._addAttributes(Slider, ticks, labels, labelHeight, granularity, flip, color, contrast, fontFamily, bold, italic, fontSize, style, readOnly);
		this._addAttribute('rating', undefined);
		this._addAttribute('markerPos', undefined);
		this._addAttribute('history', []);
		this._addAttribute('lineAspectRatio', 0.01);
		this._responseClock = new Clock();
		this._isCategorical = (this._ticks.length === 0);
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	refresh() {
                super.refresh();
                this._needVertexUpdate = true;
        }
	contains(object, units) {
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'Slider.contains', context : `when determining whether Slider: ${this._name} contains
			object: ${toString(object)}`, error : 'unable to determine the position of the object' };
		return false;
	}
	reset() {
		this.psychoJS.logger.debug('reset Slider: ', this._name);
		this._markerPos = undefined;
		this._history = [];
		this._rating = undefined;
		this._responseClock.reset();
		this.status = PsychoJS.Status.NOT_STARTED;
		this._needMarkerUpdate = true;
		this._needUpdate = true;
		if (typeof this._marker !== 'undefined')
			this._marker.alpha = 0;
	}
	getRating() {
		const historyLength = this._history.length;
		if (historyLength > 0)
			return this._history[historyLength-1]['rating'];
		else
			return undefined;
	}
	getRT() {
		const historyLength = this._history.length;
		if (historyLength > 0)
			return this._history[historyLength-1]['responseTime'];
		else
			return undefined;
	}
	setFontSize(fontSize, log = false) {
		if (typeof fontSize === 'undefined') {
			fontSize = (this._units === 'pix') ? 14 : 0.03;
		}
		const hasChanged = this._setAttribute('fontSize', fontSize, log);
		if (hasChanged) {
			this._needUpdate = true;
			this._needVertexUpdate = true;
		}
	}
	setBold(bold = true, log = false) {
		const hasChanged = this._setAttribute('bold', bold, log);
		if (hasChanged) {
			this._fontWeight = (bold)?'bold':'normal';
			this._needUpdate = true;
			this._needVertexUpdate = true;
		}
	}
	setItalic(italic = false, log = false) {
		const hasChanged = this._setAttribute('italic', italic, log);
		if (hasChanged) {
			this._fontStyle = (italic)?'italic':'normal';
			this._needUpdate = true;
			this._needVertexUpdate = true;
		}
	}
	setReadOnly(readOnly = true, log = false) {
		const hasChanged = this._setAttribute('readOnly', readOnly, log);
		if (hasChanged) {
			if (readOnly)
				this._opacity /= 2.0;
			else
				this._opacity *= 2.0;
			this._needUpdate = true;
		}
	}
	setMarkerPos(displayedRating, log = false) {
		const previousMarkerPos = this._markerPos;
		this._markerPos = this._granularise(displayedRating);
		if (previousMarkerPos !== this._markerPos) {
			this._needMarkerUpdate = true;
			this._needUpdate = true;
		}
	}
	setRating(rating, log = false) {
		rating = this._granularise(rating);
		this._markerPos = rating;
		if (this._isCategorical)
			rating = this._labels[Math.round(rating)];
		this._setAttribute('rating', rating, log);
	}
	_recordRating(rating, responseTime = undefined, log = false) {
		if (typeof responseTime === 'undefined')
			responseTime = this._responseClock.getTime();
		this.setRating(rating, log);
		this._history.push({rating: this._rating, responseTime});
		this.psychoJS.logger.debug('record a new rating: ', this._rating, 'with response time: ', responseTime, 'for Slider: ', this._name);
		this._needMarkerUpdate = true;
		this._needUpdate = true;
	}
	_updateIfNeeded() {
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._buildSlider();
		this._updateMarker();
		this._pixi.scale.x = this._flipHoriz ? -1 : 1;
		this._pixi.scale.y = this._flipVert ? 1 : -1;
		this._pixi.rotation = this._ori * Math.PI / 180;
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.alpha = this._opacity;
	}
	_updateMarker() {
		if (!this._needMarkerUpdate)
			return;
		this._needMarkerUpdate = false;
		if (typeof this._marker !== 'undefined') {
			if (typeof this._markerPos !== 'undefined') {
				const visibleMarkerPos = this._ratingToPos([this._markerPos]);
				this._marker.position = to_pixiPoint(visibleMarkerPos[0], this.units, this.win);
				this._marker.alpha = 1;
			} else
				this._marker.alpha = 0;
		}
	}
	_buildSlider() {
		if (!this._needVertexUpdate)
			return;
		this._needVertexUpdate = false;
		this._applyStyle();
		this._pixi = new PIXI.Container();
		this._pixi.interactive = true;
		this._body = new PIXI.Graphics();
		this._body.interactive = true;
		this._pixi.addChild(this._body);
		const barSize_px = to_px(this._barSize, this._units, this._win).map(v => Math.max(1, v));
		if (this._barLineWidth_px > 0) {
			this._body.lineStyle(this._barLineWidth_px, this._barLineColor.int, this._opacity, 0.5);
			if (typeof this._barFillColor !== 'undefined')
				this._body.beginFill(this._barFillColor.int, this._opacity);
			this._body.drawRect(-barSize_px[0] / 2, -barSize_px[1] / 2, barSize_px[0], barSize_px[1]);
			if (typeof this._barFillColor !== 'undefined')
				this._body.endFill();
		}
		if (this._isCategorical) {
			this._ticks = [...Array(this._labels.length)].map((_, i) => i);
			this._granularity = 1.0;
		}
		const tickPositions = this._ratingToPos(this._ticks);
		const tickPositions_px = tickPositions.map( p => to_px(p, this._units, this._win));
		this._body.lineStyle(this._barLineWidth_px*2, this._tickColor.int, this._opacity, 0.5);
		const tickSize_px = to_px(this._tickSize, this._units, this._win);
		for (let tickPosition_px of tickPositions_px) {
			if (this._tickType === Slider.Shape.LINE) {
				this._body.moveTo(tickPosition_px[0] - tickSize_px[0]/2, tickPosition_px[1] - tickSize_px[1]/2);
				this._body.lineTo(tickPosition_px[0] + tickSize_px[0]/2, tickPosition_px[1] + tickSize_px[1]/2);
			}
			else if (this._tickType === Slider.Shape.DISC) {
				this._body.beginFill(this._tickColor.int, this._opacity);
				this._body.drawCircle(tickPosition_px[0], tickPosition_px[1], Math.max(tickSize_px[0], tickSize_px[1]));
				this._body.endFill();
			}
		}
		const eventCaptureRectangle = new PIXI.Graphics();
		eventCaptureRectangle.beginFill(0, 0);
		eventCaptureRectangle.drawRect(-barSize_px[0]/2 - tickSize_px[0]/2, -barSize_px[1]/2 - tickSize_px[1]/2,
			barSize_px[0] + tickSize_px[0], barSize_px[1] + tickSize_px[1]);
		eventCaptureRectangle.endFill();
		this._pixi.addChild(eventCaptureRectangle);
		const labelPositions_px = [...Array(this._labels.length)].map(
			(_, i) => tickPositions_px[Math.round(i / (this._labels.length-1) * (this._ticks.length-1))]);
		const fontSize_px = to_px([this._fontSize, this._fontSize], this._units, this._win);
		for (let l = 0; l < labelPositions_px.length; ++l) {
			const labelText = new PIXI.Text(this._labels[l], {
				fontFamily : this._fontFamily,
				fontWeight: this._fontWeight,
				fontStyle: this._fontStyle,
				fontSize: Math.round(fontSize_px[0]),
				fill: this._labelColor.hex,
				align: this._labelAlign});
			const labelBounds = labelText.getBounds(true);
			labelText.position.x = labelPositions_px[l][0];
			labelText.position.y = labelPositions_px[l][1];
			labelText.anchor.x = this._labelAnchor.x;
			labelText.anchor.y = this._labelAnchor.y;
			if (this._isHorizontal()) {
				if (this._flip)
					labelText.position.y -= labelBounds.height + tickSize_px[1];
				else
					labelText.position.y += tickSize_px[1];
			} else {
				if (this._flip)
					labelText.position.x += tickSize_px[0];
				else
					if (this._labelOri === 0)
						labelText.position.x -= labelBounds.width + tickSize_px[0];
					else
						labelText.position.x -= tickSize_px[0];
			}
			labelText.rotation = (this._ori + this._labelOri) * Math.PI / 180;
			labelText.alpha = this._opacity;
			this._pixi.addChild(labelText);
		}
		const markerSize_px = Math.max(...to_px(this._markerSize, this._units, this._win));
		this._marker = new PIXI.Graphics();
		this._marker.alpha = 0;
		this._marker.interactive = true;
		this._pixi.addChild(this._marker);
		if (this._markerType === Slider.Shape.DISC) {
			this._marker.lineStyle(1, this._markerColor.int, this._opacity, 0.5);
			this._marker.beginFill(this._markerColor.int, this._opacity);
			this._marker.drawCircle(0, 0, markerSize_px/2);
			this._marker.endFill();
		}
		else if (this._markerType === Slider.Shape.TRIANGLE) {
			this._marker.lineStyle(1, this._markerColor.int, this._opacity, 0.5);
			this._marker.beginFill(this._markerColor.int, this._opacity);
			this._marker.moveTo(0, 0);
			if (this._isHorizontal()) {
				if (this._flip) {
					this._marker.lineTo(markerSize_px/2, markerSize_px/2);
					this._marker.lineTo(-markerSize_px/2, markerSize_px/2);
				} else {
					this._marker.lineTo(markerSize_px/2, -markerSize_px/2);
					this._marker.lineTo(-markerSize_px/2, -markerSize_px/2);
				}
			} else {
				if (this._flip) {
					this._marker.lineTo(-markerSize_px/2, markerSize_px/2);
					this._marker.lineTo(-markerSize_px/2, -markerSize_px/2);
				} else {
					this._marker.lineTo(markerSize_px/2, markerSize_px/2);
					this._marker.lineTo(markerSize_px/2, -markerSize_px/2);
				}
			}
			this._marker.endFill();
		}
		const self = this;
		self._markerDragging = false;
		this._marker.pointerdown = this._marker.mousedown = this._marker.touchstart = (event) => {
			if (event.data.button === 0) {
				self._markerDragging = true;
			}
			event.stopPropagation();
		};
		this._marker.pointerup = this._marker.mouseup = this._marker.touchend = (event) => {
			if (self._markerDragging) {
				self._markerDragging = false;
				const mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
				const rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
				self._recordRating(rating);
				event.stopPropagation();
			}
		};
		this._marker.pointerupoutside = this._marker.mouseupoutside = this._marker.touchendoutside = (event) => {
			if (self._markerDragging) {
				const mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
				const rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
				self._recordRating(rating);
				self._markerDragging = false;
				event.stopPropagation();
			}
		};
		this._marker.pointermove = (event) => {
			if (self._markerDragging) {
				const mouseLocalPos_px = event.data.getLocalPosition(self._pixi);
				const rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
				self.setMarkerPos(rating);
				event.stopPropagation();
			}
		};
		this._pixi.pointerup = this._pixi.mouseup = this._pixi.touchend = (event) => {
			const mouseLocalPos_px = event.data.getLocalPosition(self._body);
			const rating = self._posToRating([mouseLocalPos_px.x, mouseLocalPos_px.y]);
			self._recordRating(rating);
			event.stopPropagation();
		};
	}
	_applyStyle() {
		if (this._isHorizontal()) {
			this._barSize = [this._size[0], 0];
			this._tickSize = [0, this._size[1]];
			this._labelAnchor = new PIXI.Point(0.5, 0);
		} else {
			this._barSize = [0, this._size[1]];
			this._tickSize = [this._size[0], 0];
			this._labelAnchor = new PIXI.Point(0, 0.5);
		}
		this._barLineWidth_px = 1;
		this._barLineColor = this._color;
		this._barFillColor = undefined;
		this._tickType = Slider.Shape.LINE;
		this._tickColor  = this._color;
		this._markerColor = new Color('red');
		this._markerType = Slider.Shape.DISC;
		this._markerSize = this._tickSize;
		this._labelColor = this._color;
		this._labelAlign = 'center';
		this._labelOri = 0;
		if (this._style.indexOf(Slider.Style.RATING) > -1) ;
		if (this._style.indexOf(Slider.Style.TRIANGLE_MARKER) > -1) {
			this._markerType = Slider.Shape.TRIANGLE;
			this._markerSize = this._markerSize.map( s => s*2 );
		}
		if (this._style.indexOf(Slider.Style.SLIDER) > -1) {
			this.psychoJS.logger.warn('"slider" style not implemented!');
		}
		if (this._style.indexOf(Slider.Style.WHITE_ON_BLACK) > -1) {
			this._barLineColor = new Color('black');
			this._tickColor  = new Color('black');
			this._markerColor = new Color('white');
			this._labelColor = new Color('black');
		}
		if (this._style.indexOf(Slider.Style.LABELS45) > -1) {
			if (this._flip) {
				this._labelAnchor = new PIXI.Point(0, 0.5);
				this._labelAlign = 'left';
			} else {
				this._labelAnchor = new PIXI.Point(1, 0.5);
				this._labelAlign = 'right';
			}
			this._labelOri = -45;
		}
		if (this._style.indexOf(Slider.Style.RADIO) > -1) {
			this._barLineWidth_px = 0;
			this._tickType = Slider.Shape.DISC;
			this._markerColor = this.getContrastedColor(this._tickColor, 0.5);
			this._markerSize.x *= 0.7;
			this._markerSize.y *= 0.7;
		}
	}
	_ratingToPos(ratings) {
		const range = this._ticks[this._ticks.length-1] - this._ticks[0];
		if (this._isHorizontal())
			return ratings.map( v => [((v-this._ticks[0])/range-0.5) * this._size[0], 0]);
		else
			return ratings.map( v => [0, (1.0 - (v-this._ticks[0])/range - 0.5) * this._size[1]]);
	}
	_posToRating(pos_px) {
		const range = this._ticks[this._ticks.length-1] - this._ticks[0];
		const size_px = to_px(this._size, this._units, this._win);
		if (this._isHorizontal())
			return (pos_px[0] / size_px[0] + 0.5) * range + this._ticks[0];
		else
			return (1.0 - (pos_px[1] / size_px[1] + 0.5)) * range + this._ticks[0];
	}
	_isHorizontal() {
		return (this._size[0] > this._size[1]);
	}
	_granularise(rating) {
		if (typeof rating === 'undefined')
			return undefined;
		if (this._granularity > 0)
			rating = Math.round( rating / this._granularity ) * this._granularity;
		rating = Math.min( Math.max(this._ticks[0], rating), this._ticks[this._ticks.length-1]);
		return rating;
	}
}
Slider.Shape = {
	DISC: Symbol.for('DISC'),
	TRIANGLE: Symbol.for('TRIANGLE'),
	LINE: Symbol.for('LINE'),
	BOX: Symbol.for('BOX')
};
Slider.Style = {
	RATING: Symbol.for('RATING'),
	TRIANGLE_MARKER: Symbol.for('TRIANGLE_MARKER'),
	SLIDER: Symbol.for('SLIDER'),
	WHITE_ON_BLACK: Symbol.for('WHITE_ON_BLACK'),
	LABELS45: Symbol.for('LABELS45'),
	RADIO: Symbol.for('RADIO')
};

/**
 * Text Stimulus.
 *
 * @author Alain Pitiot
 * @version 2020.5
 * @copyright (c) 2020 Ilixa Ltd. ({@link http://ilixa.com})
 * @license Distributed under the terms of the MIT License
 */
class TextStim extends mix(VisualStim).with(ColorMixin)
{
	constructor({
		name,
		win,
		text = 'Hello World',
		font = 'Arial',
		pos,
		color = new Color('white'),
		opacity,
		contrast = 1.0,
		units,
		ori,
		height = 0.1,
		bold = false,
		italic = false,
		alignHoriz = 'left',
		alignVert = 'center',
		wrapWidth,
		flipHoriz = false,
		flipVert = false,
		autoDraw,
		autoLog
	} = {})
	{
		super({ name, win, units, ori, opacity, pos, autoDraw, autoLog });
		this._addAttributes(TextStim, text, font, color, contrast, height, bold, italic, alignHoriz, alignVert, wrapWidth, flipHoriz, flipVert);
		if (this._autoLog)
			this._psychoJS.experimentLogger.exp(`Created ${this.name} = ${this.toString()}`);
	}
	setText(text, log)
	{
		this._setAttribute('text', text, log);
		this._needUpdate = true;
	}
	setAlignHoriz(alignHoriz, log) {
		this._setAttribute('alignHoriz', alignHoriz, log);
		this._needUpdate = true;
	}
	setWrapWidth(wrapWidth, log) {
		if (typeof wrapWidth === 'undefined') {
			if (!TextStim._defaultWrapWidthMap.has(this._units))
				throw { origin : 'TextStim.setWrapWidth', context : 'when setting the wrap width of TextStim: ' + this._name, error : 'no default wrap width for unit: ' + this._units};
			wrapWidth = TextStim._defaultWrapWidthMap.get(this._units);
		}
		this._setAttribute('wrapWidth', wrapWidth, log);
		this._needUpdate = true;
	}
	setHeight(height, log) {
		if (typeof height === 'undefined') {
			if (!TextStim._defaultLetterHeightMap.has(this._units))
				throw { origin : 'TextStim.setHeight', context : 'when setting the height of TextStim: ' + this._name, error : 'no default letter height for unit: ' + this._units};
			height = TextStim._defaultLetterHeightMap.get(this._units);
		}
		this._setAttribute('height', height, log);
		this._needUpdate = true;
	}
	setItalic(italic, log) {
		this._setAttribute('italic', italic, log);
		this._needUpdate = true;
	}
	setBold(bold, log) {
		this._setAttribute('bold', bold, log);
		this._needUpdate = true;
	}
	setFlipVert(flipVert, log) {
		this._setAttribute('flipVert', flipVert, log);
		this._needUpdate = true;
	}
	setFlipHoriz(flipHoriz, log) {
		this._setAttribute('flipHoriz', flipHoriz, log);
		this._needUpdate = true;
	}
	contains(object, units) {
		let objectPos_px = getPositionFromObject(object, units);
		if (typeof objectPos_px === 'undefined')
			throw { origin : 'TextStim.contains', context : 'when determining whether TextStim: ' + this._name + ' contains object: ' + toString(object), error : 'unable to determine the position of the object' };
		return false;
	}
	_updateIfNeeded()
	{
		if (!this._needUpdate)
			return;
		this._needUpdate = false;
		this._heightPix = this._getLengthPix(this._height);
		const fontSize = Math.round(this._heightPix);
		let color = this.getContrastedColor(this._color, this._contrast);
		const font =
			(this._bold ? 'bold ' : '') +
			(this._italic ? 'italic ' : '') +
			fontSize + 'px ' + this._font;
		this._pixi = new PIXI.Text(this._text, {
			font: font,
			fill: color.hex,
			align: this._alignHoriz,
			wordWrap: (typeof this._wrapWidth !== 'undefined'),
			wordWrapWidth: this._wrapWidth ? this._getHorLengthPix(this._wrapWidth) : 0
		});
		this._pixi.anchor.x = 0.5;
		this._pixi.anchor.y = 0.5;
		this._pixi.scale.x = this._flipHoriz ? -1 : 1;
		this._pixi.scale.y = this._flipVert ? 1 : -1;
		this._pixi.rotation = this._ori * Math.PI / 180;
		this._pixi.position = to_pixiPoint(this.pos, this.units, this.win);
		this._pixi.alpha = this._opacity;
		this._size = [
			this._getLengthUnits(Math.abs(this._pixi.width)),
			this._getLengthUnits(Math.abs(this._pixi.height))
		];
	}
}
TextStim._defaultLetterHeightMap = new Map([
	['cm', 1.0],
	['deg', 1.0],
	['degs', 1.0],
	['degFlatPos', 1.0],
	['degFlat', 1.0],
	['norm', 0.1],
	['height', 0.2],
	['pix', 20],
	['pixels', 20]
]);
TextStim._defaultWrapWidthMap = new Map([
	['cm', 15.0],
	['deg', 15.0],
	['degs', 15.0],
	['degFlatPos', 15.0],
	['degFlat', 15.0],
	['norm', 1],
	['height', 1],
	['pix', 500],
	['pixels', 500]
]);

export { ImageStim, MovieStim, Polygon, Rect, ShapeStim, Slider, TextStim, VisualStim };