const CategoryService = require('../../services/category.service');
const CategoryController = require('../../controllers/category.controller');
const {mockResponse, mockRequest} = require('../mocker');

test('category controller should return categories', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = [{name: 'electronics'}, {name: 'Kitchenware'}];
    const spy = jest.spyOn(CategoryService, 'getAllCategories').mockImplementation(() => {
        return response;
    })

    await CategoryController.getCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully Fetched Category',
        success:true,
        code:200,
        data: response
    });
});

test('category controller should delete a category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const spy = jest.spyOn(CategoryService, 'deleteCategories').mockImplementation(() => {
        return true;
    });

    await CategoryController.deleteCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully Deleted Category',
        success:true,
        code:200
    })
})


test('category controller should create a category', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = {id: 1, name: "KitchenWare"};
    const spy = jest.spyOn(CategoryService, 'createCategories').mockImplementation(() => {
        return response;
    });

    await CategoryController.createCategory(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully Created Category',
        success:true,
        code:201,
        data: response
    })
})


test('category controller should get category by its ID', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = {id: 1, name: "KitchenWare"};
    const spy = jest.spyOn(CategoryService, 'getCategoriesById').mockImplementation(() => {
        return response;
    });

    await CategoryController.getCategoryById(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully Fetched Category',
        success:true,
        code:201,
        data: response
    })
})


test('category controller should get category by its Name', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const response = {id:2, name: "KitchenWare"};
    const spy = jest.spyOn(CategoryService, 'getCategoriesByName').mockImplementation(() => {
        return response;
    });

    await CategoryController.getCategoryByName(req, res);
    expect(spy).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
        message: 'Successfully Fetched Category',
        success:true,
        code:201,
        data: response
    })
})