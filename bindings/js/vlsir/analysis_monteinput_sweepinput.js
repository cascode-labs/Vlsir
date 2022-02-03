// source: spice.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.vlsir.spice.Analysis');
goog.provide('proto.vlsir.spice.Analysis.AnCase');
goog.provide('proto.vlsir.spice.MonteInput');
goog.provide('proto.vlsir.spice.SweepInput');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.vlsir.spice.AcInput');
goog.require('proto.vlsir.spice.Control');
goog.require('proto.vlsir.spice.CustomAnalysisInput');
goog.require('proto.vlsir.spice.DcInput');
goog.require('proto.vlsir.spice.OpInput');
goog.require('proto.vlsir.spice.Sweep');
goog.require('proto.vlsir.spice.TranInput');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.spice.Analysis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.vlsir.spice.Analysis.oneofGroups_);
};
goog.inherits(proto.vlsir.spice.Analysis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.spice.Analysis.displayName = 'proto.vlsir.spice.Analysis';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.spice.MonteInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.spice.MonteInput.repeatedFields_, null);
};
goog.inherits(proto.vlsir.spice.MonteInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.spice.MonteInput.displayName = 'proto.vlsir.spice.MonteInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vlsir.spice.SweepInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vlsir.spice.SweepInput.repeatedFields_, null);
};
goog.inherits(proto.vlsir.spice.SweepInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vlsir.spice.SweepInput.displayName = 'proto.vlsir.spice.SweepInput';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.vlsir.spice.Analysis.oneofGroups_ = [[1,2,3,4,10,11,20]];

/**
 * @enum {number}
 */
proto.vlsir.spice.Analysis.AnCase = {
  AN_NOT_SET: 0,
  OP: 1,
  DC: 2,
  TRAN: 3,
  AC: 4,
  SWEEP: 10,
  MONTE: 11,
  CUSTOM: 20
};

/**
 * @return {proto.vlsir.spice.Analysis.AnCase}
 */
proto.vlsir.spice.Analysis.prototype.getAnCase = function() {
  return /** @type {proto.vlsir.spice.Analysis.AnCase} */(jspb.Message.computeOneofCase(this, proto.vlsir.spice.Analysis.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.spice.Analysis.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.spice.Analysis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.spice.Analysis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.Analysis.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: (f = msg.getOp()) && proto.vlsir.spice.OpInput.toObject(includeInstance, f),
    dc: (f = msg.getDc()) && proto.vlsir.spice.DcInput.toObject(includeInstance, f),
    tran: (f = msg.getTran()) && proto.vlsir.spice.TranInput.toObject(includeInstance, f),
    ac: (f = msg.getAc()) && proto.vlsir.spice.AcInput.toObject(includeInstance, f),
    sweep: (f = msg.getSweep()) && proto.vlsir.spice.SweepInput.toObject(includeInstance, f),
    monte: (f = msg.getMonte()) && proto.vlsir.spice.MonteInput.toObject(includeInstance, f),
    custom: (f = msg.getCustom()) && proto.vlsir.spice.CustomAnalysisInput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.spice.Analysis}
 */
proto.vlsir.spice.Analysis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.spice.Analysis;
  return proto.vlsir.spice.Analysis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.spice.Analysis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.spice.Analysis}
 */
proto.vlsir.spice.Analysis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vlsir.spice.OpInput;
      reader.readMessage(value,proto.vlsir.spice.OpInput.deserializeBinaryFromReader);
      msg.setOp(value);
      break;
    case 2:
      var value = new proto.vlsir.spice.DcInput;
      reader.readMessage(value,proto.vlsir.spice.DcInput.deserializeBinaryFromReader);
      msg.setDc(value);
      break;
    case 3:
      var value = new proto.vlsir.spice.TranInput;
      reader.readMessage(value,proto.vlsir.spice.TranInput.deserializeBinaryFromReader);
      msg.setTran(value);
      break;
    case 4:
      var value = new proto.vlsir.spice.AcInput;
      reader.readMessage(value,proto.vlsir.spice.AcInput.deserializeBinaryFromReader);
      msg.setAc(value);
      break;
    case 10:
      var value = new proto.vlsir.spice.SweepInput;
      reader.readMessage(value,proto.vlsir.spice.SweepInput.deserializeBinaryFromReader);
      msg.setSweep(value);
      break;
    case 11:
      var value = new proto.vlsir.spice.MonteInput;
      reader.readMessage(value,proto.vlsir.spice.MonteInput.deserializeBinaryFromReader);
      msg.setMonte(value);
      break;
    case 20:
      var value = new proto.vlsir.spice.CustomAnalysisInput;
      reader.readMessage(value,proto.vlsir.spice.CustomAnalysisInput.deserializeBinaryFromReader);
      msg.setCustom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.spice.Analysis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.spice.Analysis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.spice.Analysis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.Analysis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.vlsir.spice.OpInput.serializeBinaryToWriter
    );
  }
  f = message.getDc();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.vlsir.spice.DcInput.serializeBinaryToWriter
    );
  }
  f = message.getTran();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vlsir.spice.TranInput.serializeBinaryToWriter
    );
  }
  f = message.getAc();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.vlsir.spice.AcInput.serializeBinaryToWriter
    );
  }
  f = message.getSweep();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.vlsir.spice.SweepInput.serializeBinaryToWriter
    );
  }
  f = message.getMonte();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.vlsir.spice.MonteInput.serializeBinaryToWriter
    );
  }
  f = message.getCustom();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.vlsir.spice.CustomAnalysisInput.serializeBinaryToWriter
    );
  }
};


/**
 * optional OpInput op = 1;
 * @return {?proto.vlsir.spice.OpInput}
 */
proto.vlsir.spice.Analysis.prototype.getOp = function() {
  return /** @type{?proto.vlsir.spice.OpInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.OpInput, 1));
};


/**
 * @param {?proto.vlsir.spice.OpInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setOp = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearOp = function() {
  return this.setOp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasOp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DcInput dc = 2;
 * @return {?proto.vlsir.spice.DcInput}
 */
proto.vlsir.spice.Analysis.prototype.getDc = function() {
  return /** @type{?proto.vlsir.spice.DcInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.DcInput, 2));
};


/**
 * @param {?proto.vlsir.spice.DcInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setDc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearDc = function() {
  return this.setDc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasDc = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TranInput tran = 3;
 * @return {?proto.vlsir.spice.TranInput}
 */
proto.vlsir.spice.Analysis.prototype.getTran = function() {
  return /** @type{?proto.vlsir.spice.TranInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.TranInput, 3));
};


/**
 * @param {?proto.vlsir.spice.TranInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setTran = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearTran = function() {
  return this.setTran(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasTran = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AcInput ac = 4;
 * @return {?proto.vlsir.spice.AcInput}
 */
proto.vlsir.spice.Analysis.prototype.getAc = function() {
  return /** @type{?proto.vlsir.spice.AcInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.AcInput, 4));
};


/**
 * @param {?proto.vlsir.spice.AcInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setAc = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearAc = function() {
  return this.setAc(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasAc = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SweepInput sweep = 10;
 * @return {?proto.vlsir.spice.SweepInput}
 */
proto.vlsir.spice.Analysis.prototype.getSweep = function() {
  return /** @type{?proto.vlsir.spice.SweepInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.SweepInput, 10));
};


/**
 * @param {?proto.vlsir.spice.SweepInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setSweep = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearSweep = function() {
  return this.setSweep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasSweep = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional MonteInput monte = 11;
 * @return {?proto.vlsir.spice.MonteInput}
 */
proto.vlsir.spice.Analysis.prototype.getMonte = function() {
  return /** @type{?proto.vlsir.spice.MonteInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.MonteInput, 11));
};


/**
 * @param {?proto.vlsir.spice.MonteInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setMonte = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearMonte = function() {
  return this.setMonte(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasMonte = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CustomAnalysisInput custom = 20;
 * @return {?proto.vlsir.spice.CustomAnalysisInput}
 */
proto.vlsir.spice.Analysis.prototype.getCustom = function() {
  return /** @type{?proto.vlsir.spice.CustomAnalysisInput} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.CustomAnalysisInput, 20));
};


/**
 * @param {?proto.vlsir.spice.CustomAnalysisInput|undefined} value
 * @return {!proto.vlsir.spice.Analysis} returns this
*/
proto.vlsir.spice.Analysis.prototype.setCustom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.vlsir.spice.Analysis.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.Analysis} returns this
 */
proto.vlsir.spice.Analysis.prototype.clearCustom = function() {
  return this.setCustom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.Analysis.prototype.hasCustom = function() {
  return jspb.Message.getField(this, 20) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.spice.MonteInput.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.spice.MonteInput.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.spice.MonteInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.spice.MonteInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.MonteInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysisName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    npts: jspb.Message.getFieldWithDefault(msg, 2, 0),
    seed: jspb.Message.getFieldWithDefault(msg, 3, 0),
    anList: jspb.Message.toObjectList(msg.getAnList(),
    proto.vlsir.spice.Analysis.toObject, includeInstance),
    ctrlsList: jspb.Message.toObjectList(msg.getCtrlsList(),
    proto.vlsir.spice.Control.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.spice.MonteInput}
 */
proto.vlsir.spice.MonteInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.spice.MonteInput;
  return proto.vlsir.spice.MonteInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.spice.MonteInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.spice.MonteInput}
 */
proto.vlsir.spice.MonteInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNpts(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeed(value);
      break;
    case 4:
      var value = new proto.vlsir.spice.Analysis;
      reader.readMessage(value,proto.vlsir.spice.Analysis.deserializeBinaryFromReader);
      msg.addAn(value);
      break;
    case 5:
      var value = new proto.vlsir.spice.Control;
      reader.readMessage(value,proto.vlsir.spice.Control.deserializeBinaryFromReader);
      msg.addCtrls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.spice.MonteInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.spice.MonteInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.spice.MonteInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.MonteInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysisName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNpts();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSeed();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.spice.Analysis.serializeBinaryToWriter
    );
  }
  f = message.getCtrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vlsir.spice.Control.serializeBinaryToWriter
    );
  }
};


/**
 * optional string analysis_name = 1;
 * @return {string}
 */
proto.vlsir.spice.MonteInput.prototype.getAnalysisName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.spice.MonteInput} returns this
 */
proto.vlsir.spice.MonteInput.prototype.setAnalysisName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 npts = 2;
 * @return {number}
 */
proto.vlsir.spice.MonteInput.prototype.getNpts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.MonteInput} returns this
 */
proto.vlsir.spice.MonteInput.prototype.setNpts = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 seed = 3;
 * @return {number}
 */
proto.vlsir.spice.MonteInput.prototype.getSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.vlsir.spice.MonteInput} returns this
 */
proto.vlsir.spice.MonteInput.prototype.setSeed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated Analysis an = 4;
 * @return {!Array<!proto.vlsir.spice.Analysis>}
 */
proto.vlsir.spice.MonteInput.prototype.getAnList = function() {
  return /** @type{!Array<!proto.vlsir.spice.Analysis>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.spice.Analysis, 4));
};


/**
 * @param {!Array<!proto.vlsir.spice.Analysis>} value
 * @return {!proto.vlsir.spice.MonteInput} returns this
*/
proto.vlsir.spice.MonteInput.prototype.setAnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.spice.Analysis=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.Analysis}
 */
proto.vlsir.spice.MonteInput.prototype.addAn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.spice.Analysis, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.MonteInput} returns this
 */
proto.vlsir.spice.MonteInput.prototype.clearAnList = function() {
  return this.setAnList([]);
};


/**
 * repeated Control ctrls = 5;
 * @return {!Array<!proto.vlsir.spice.Control>}
 */
proto.vlsir.spice.MonteInput.prototype.getCtrlsList = function() {
  return /** @type{!Array<!proto.vlsir.spice.Control>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.spice.Control, 5));
};


/**
 * @param {!Array<!proto.vlsir.spice.Control>} value
 * @return {!proto.vlsir.spice.MonteInput} returns this
*/
proto.vlsir.spice.MonteInput.prototype.setCtrlsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vlsir.spice.Control=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.Control}
 */
proto.vlsir.spice.MonteInput.prototype.addCtrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vlsir.spice.Control, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.MonteInput} returns this
 */
proto.vlsir.spice.MonteInput.prototype.clearCtrlsList = function() {
  return this.setCtrlsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vlsir.spice.SweepInput.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vlsir.spice.SweepInput.prototype.toObject = function(opt_includeInstance) {
  return proto.vlsir.spice.SweepInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vlsir.spice.SweepInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.SweepInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    analysisName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    variable: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sweep: (f = msg.getSweep()) && proto.vlsir.spice.Sweep.toObject(includeInstance, f),
    anList: jspb.Message.toObjectList(msg.getAnList(),
    proto.vlsir.spice.Analysis.toObject, includeInstance),
    ctrlsList: jspb.Message.toObjectList(msg.getCtrlsList(),
    proto.vlsir.spice.Control.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vlsir.spice.SweepInput}
 */
proto.vlsir.spice.SweepInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vlsir.spice.SweepInput;
  return proto.vlsir.spice.SweepInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vlsir.spice.SweepInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vlsir.spice.SweepInput}
 */
proto.vlsir.spice.SweepInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAnalysisName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVariable(value);
      break;
    case 3:
      var value = new proto.vlsir.spice.Sweep;
      reader.readMessage(value,proto.vlsir.spice.Sweep.deserializeBinaryFromReader);
      msg.setSweep(value);
      break;
    case 4:
      var value = new proto.vlsir.spice.Analysis;
      reader.readMessage(value,proto.vlsir.spice.Analysis.deserializeBinaryFromReader);
      msg.addAn(value);
      break;
    case 5:
      var value = new proto.vlsir.spice.Control;
      reader.readMessage(value,proto.vlsir.spice.Control.deserializeBinaryFromReader);
      msg.addCtrls(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vlsir.spice.SweepInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vlsir.spice.SweepInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vlsir.spice.SweepInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vlsir.spice.SweepInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAnalysisName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVariable();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSweep();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.vlsir.spice.Sweep.serializeBinaryToWriter
    );
  }
  f = message.getAnList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.vlsir.spice.Analysis.serializeBinaryToWriter
    );
  }
  f = message.getCtrlsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.vlsir.spice.Control.serializeBinaryToWriter
    );
  }
};


/**
 * optional string analysis_name = 1;
 * @return {string}
 */
proto.vlsir.spice.SweepInput.prototype.getAnalysisName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.spice.SweepInput} returns this
 */
proto.vlsir.spice.SweepInput.prototype.setAnalysisName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string variable = 2;
 * @return {string}
 */
proto.vlsir.spice.SweepInput.prototype.getVariable = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vlsir.spice.SweepInput} returns this
 */
proto.vlsir.spice.SweepInput.prototype.setVariable = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Sweep sweep = 3;
 * @return {?proto.vlsir.spice.Sweep}
 */
proto.vlsir.spice.SweepInput.prototype.getSweep = function() {
  return /** @type{?proto.vlsir.spice.Sweep} */ (
    jspb.Message.getWrapperField(this, proto.vlsir.spice.Sweep, 3));
};


/**
 * @param {?proto.vlsir.spice.Sweep|undefined} value
 * @return {!proto.vlsir.spice.SweepInput} returns this
*/
proto.vlsir.spice.SweepInput.prototype.setSweep = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vlsir.spice.SweepInput} returns this
 */
proto.vlsir.spice.SweepInput.prototype.clearSweep = function() {
  return this.setSweep(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vlsir.spice.SweepInput.prototype.hasSweep = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Analysis an = 4;
 * @return {!Array<!proto.vlsir.spice.Analysis>}
 */
proto.vlsir.spice.SweepInput.prototype.getAnList = function() {
  return /** @type{!Array<!proto.vlsir.spice.Analysis>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.spice.Analysis, 4));
};


/**
 * @param {!Array<!proto.vlsir.spice.Analysis>} value
 * @return {!proto.vlsir.spice.SweepInput} returns this
*/
proto.vlsir.spice.SweepInput.prototype.setAnList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.vlsir.spice.Analysis=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.Analysis}
 */
proto.vlsir.spice.SweepInput.prototype.addAn = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.vlsir.spice.Analysis, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.SweepInput} returns this
 */
proto.vlsir.spice.SweepInput.prototype.clearAnList = function() {
  return this.setAnList([]);
};


/**
 * repeated Control ctrls = 5;
 * @return {!Array<!proto.vlsir.spice.Control>}
 */
proto.vlsir.spice.SweepInput.prototype.getCtrlsList = function() {
  return /** @type{!Array<!proto.vlsir.spice.Control>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vlsir.spice.Control, 5));
};


/**
 * @param {!Array<!proto.vlsir.spice.Control>} value
 * @return {!proto.vlsir.spice.SweepInput} returns this
*/
proto.vlsir.spice.SweepInput.prototype.setCtrlsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.vlsir.spice.Control=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vlsir.spice.Control}
 */
proto.vlsir.spice.SweepInput.prototype.addCtrls = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.vlsir.spice.Control, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vlsir.spice.SweepInput} returns this
 */
proto.vlsir.spice.SweepInput.prototype.clearCtrlsList = function() {
  return this.setCtrlsList([]);
};


