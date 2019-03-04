"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const ComponentService_1 = require("./ui/ComponentService");
const DataService_1 = require("./data/DataService");
const router = express.Router();
//==========================================================================
// Component Transaction
//==========================================================================
router.get("/template/component/list", (req, res) => {
    ComponentService_1.componentService.list(req.body, (data) => {
        res.json(data);
    });
});
router.get("/template/component/detail", (req, res) => {
    ComponentService_1.componentService.detail(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/add", (req, res) => {
    ComponentService_1.componentService.insert(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/mod", (req, res) => {
    ComponentService_1.componentService.update(req.body, (data) => {
        res.json(data);
    });
});
router.delete("/template/component/del", (req, res) => {
    ComponentService_1.componentService.delete(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/bulk/add", (req, res) => {
    ComponentService_1.componentService.insertBulk(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/bulk/mod", (req, res) => {
    ComponentService_1.componentService.updateBulk(req.body, (data) => {
        res.json(data);
    });
});
//==========================================================================
//==========================================================================
// Component Data Transaction
//==========================================================================
router.get("/template/component/data/list", (req, res) => {
    DataService_1.dataService.list(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/data/add", (req, res) => {
    DataService_1.dataService.insert(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/data/mod", (req, res) => {
    DataService_1.dataService.update(req.body, (data) => {
        res.json(data);
    });
});
router.post("/template/component/data/del", (req, res) => {
    DataService_1.dataService.delete(req.body, (data) => {
        res.json(data);
    });
});
//==========================================================================
module.exports = router;
//# sourceMappingURL=TemplateRouter.js.map