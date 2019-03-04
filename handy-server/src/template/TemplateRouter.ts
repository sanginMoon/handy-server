import * as express from "express";
import { componentService } from './ui/ComponentService';
import { dataService } from './data/DataService';


const router = express.Router();

//==========================================================================
// Component Transaction
//==========================================================================
router.get("/template/component/list", (req, res) => {
    componentService.list(req.body,(data) => {
        res.json(data);
    });
});

router.get("/template/component/detail", (req, res) => {
    componentService.detail(req.body,(data) => {
        res.json(data);
    });
});


router.post("/template/component/add", (req, res) => {
    componentService.insert(req.body,(data) => {
        res.json(data);
    });
});


router.post("/template/component/mod", (req, res) => {
    componentService.update(req.body,(data) => {
        res.json(data);
    });
});

router.delete("/template/component/del", (req, res) => {
    componentService.delete(req.body,(data) => {
        res.json(data);
    });
});

router.post("/template/component/bulk/add", (req, res) => {
    componentService.insertBulk(req.body,(data) => {
        res.json(data);
    });
});

router.post("/template/component/bulk/mod", (req, res) => {
    componentService.updateBulk(req.body,(data) => {
        res.json(data);
    });
});
//==========================================================================


//==========================================================================
// Component Data Transaction
//==========================================================================
router.get("/template/component/data/list", (req, res) => {
    dataService.list(req.body,(data) => {
        res.json(data);
    });
});

router.post("/template/component/data/add", (req, res) => {
    dataService.insert(req.body,(data) => {
        res.json(data);
    });
});

router.post("/template/component/data/mod", (req, res) => {
    dataService.update(req.body,(data) => {
        res.json(data);
    });
});

router.post("/template/component/data/del", (req, res) => {
    dataService.delete(req.body,(data) => {
        res.json(data);
    });
});
//==========================================================================

module.exports = router;
