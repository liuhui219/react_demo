import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import TableModel from '../components/Component/Table/TableModel'
import Table from '../components/Component/Table/Table'

import AddStaff from '../components/pages/HR/AddStaff';
import AddStaff1 from '../components/pages/HR/AddStaff1';
import StaffCheck from '../components/pages/HR/StaffCheck';
import StaffCheckInfo from '../components/pages/HR/StaffCheckInfo';
import CheckRefuse from '../components/pages/HR/CheckRefuse';
import RefuseInfo from '../components/pages/HR/RefuseInfo';
import Revise from '../components/pages/HR/revise';
import inJob from '../components/pages/HR/inJob';
import InJobInfo from '../components/pages/HR/InJobInfo';
import InJobRevise from '../components/pages/HR/InJobRevise';
import TransferPosition from '../components/pages/HR/transferPosition';
import TransferCheck from '../components/pages/HR/TransferCheck';
import TransferCheckInfo from '../components/pages/HR/TransferCheckInfo';
import TransferRefuse from '../components/pages/HR/TransferRefuse';
import TransferRefuseInfo from '../components/pages/HR/TransferRefuseInfo';
import TransferHandle from '../components/pages/HR/TransferHandle';
import TransferOperation from '../components/pages/HR/TransferOperation';
import TransferRecord from '../components/pages/HR/TransferRecord';
import TransferRecordInfo from '../components/pages/HR/TransferRecordInfo';
import roleManager from '../components/pages/HR/roleManager';
import authorityManager from '../components/pages/HR/authorityManager';
import addProduct from '../components/pages/Product/addProduct';
import ProductDraft from '../components/pages/Product/ProductDraft';
import ProductRecord from '../components/pages/Product/ProductRecord';
import DraftInfo from '../components/pages/Product/DraftInfo';
import DraftEdit from '../components/pages/Product/DraftEdit';
import RecordInfo from '../components/pages/Product/RecordInfo';
import RecordEdit from '../components/pages/Product/RecordEdit';
import RecordAdd from '../components/pages/Product/RecordAdd';
import fieldManager from '../components/pages/HR/fieldManager';
import Department from '../components/pages/HR/Basics/Department'
import StaffType from '../components/pages/HR/Basics/StaffType'
import Nationality from '../components/pages/HR/Basics/Nationality'
import Nation from '../components/pages/HR/Basics/Nation'
import Card from '../components/pages/HR/Basics/Card'
import Education from '../components/pages/HR/Basics/Education'
import Degree from '../components/pages/HR/Basics/Degree'
import Company from '../components/pages/HR/Company/Company'
import CompanyUpdate from '../components/pages/HR/Company/CompanyUpdate'
import OperationLog from '../components/pages/HR/Management/OperationLog'
import User from '../components/pages/HR/Management/User'
import Apply from '../components/pages/HR/Dimission/Apply'
import DepartureAudit from '../components/pages/HR/Dimission/DepartureAudit'
import DepartureAuditInfo from '../components/pages/HR/Dimission/DepartureAuditInfo'
import DimissionReject from '../components/pages/HR/Dimission/DimissionReject'
import DimissionRejectInfo from '../components/pages/HR/Dimission/DimissionRejectInfo'
import DimissionRejecteAmend from '../components/pages/HR/Dimission/DimissionRejecteAmend'
import DimissionManage from '../components/pages/HR/Dimission/DimissionManage'
import DimissionManageInfo from '../components/pages/HR/Dimission/DimissionManageInfo'
import DimissionFile from '../components/pages/HR/Dimission/DimissionFile'
import DimissionFileList from '../components/pages/HR/Dimission/DepartureFileList'
import Classify from '../components/pages/Product/Basics/Classify'
import Property from '../components/pages/Product/Basics/Property'
import Inventory from '../components/pages/Product/Basics/Inventory'
import Unit from '../components/pages/Product/Basics/Unit'
import ExpirationData from '../components/pages/Product/Basics/ExpirationData'







export default class Router extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/erp/home" component={inJob} />
                <Route exact path="/erp/resume/:id" component={AddStaff1} />
                <Route exact path="/erp/hr-entryjob-add" component={AddStaff} />
                <Route exact path="/erp/hr-entryjob-check"  component={StaffCheck} />
                <Route exact path="/erp/hr-entryjob-info/:id" component={StaffCheckInfo} />
                <Route exact path="/erp/hr-entryjob-refuse"  component={CheckRefuse} />
                <Route exact path="/erp/hr-entryjob-RefuseInfo/:id"  component={RefuseInfo} />
                <Route exact path="/erp/hr-entryjob-Revise/:id"  component={Revise} />
                <Route exact path="/erp/hr-entryjob-injob"  component={inJob} />
                <Route exact path="/erp/hr-entryjob-InJobInfo/:id"  component={InJobInfo} />
                <Route exact path="/erp/hr-entryjob-inJobRevise/:id"  component={InJobRevise} />
                <Route exact path="/erp/hr-transferjob-check"  component={TransferCheck} />
                <Route exact path="/erp/hr-transferjob-refuse"  component={TransferRefuse} />
                <Route exact path="/erp/hr-transferjob-handle"  component={TransferHandle} />
                <Route exact path="/erp/hr-transferjob-record"  component={TransferRecord} />
                <Route exact path="/erp/hr-transferjob-TransferRecordInfo/:id"  component={TransferRecordInfo} />
                <Route exact path="/erp/hr-transferjob-transferOperation/:id"  component={TransferOperation} />
                <Route exact path="/erp/hr-transferjob-TransferCheckInfo/:id"  component={TransferCheckInfo} />
                <Route exact path="/erp/hr-transferjob-transFerRefuseInfo/:id"  component={TransferRefuseInfo} />
                <Route exact path="/erp/sys-role-manager"  component={roleManager} />
                <Route exact path="/erp/sys-permission-manager"  component={authorityManager} />
                <Route exact path="/erp/sys-fieldpermission-manager"  component={fieldManager} />
                <Route exact path="/erp/hr-transferjob-add"  component={TransferPosition} />

 
                <Route exact path="/erp/pro-product-add"  component={addProduct} />
                <Route exact path="/erp/pro-product-draft"  component={ProductDraft} />
                <Route exact path="/erp/pro-product-record"  component={ProductRecord} />
                <Route exact path="/erp/pro-draft-info/:id"  component={DraftInfo} />
                <Route exact path="/erp/pro-Draft-edit/:id"  component={DraftEdit} />
                <Route exact path="/erp/pro-Record-info/:id"  component={RecordInfo} />
                <Route exact path="/erp/pro-record-edit/:id"  component={RecordEdit} />
                <Route exact path="/erp/pro-add-record/:id"  component={RecordAdd} />


                <Route  path="/erp/pro-setting-expirationdate" component={ExpirationData} />
                <Route  path="/erp/pro-setting-util" component={Unit} />
                <Route  path="/erp/pro-setting-stock" component={Inventory} />
                <Route  path="/erp/pro-setting-sku" component={Property} />
                <Route  path="/erp/pro-setting-category" component={Classify} />

                <Route  path="/erp/hr-outjob-record" component={DimissionFileList} />
                <Route  path="/erp/DimissionFile/:id" component={DimissionFile} />
                <Route  path="/erp/DimissionManageInfo/:id" component={DimissionManageInfo} />
                <Route  path="/erp/hr-outjob-handle" component={DimissionManage} />
                <Route  path="/erp/DimissionRejecteAmend/:id" component={DimissionRejecteAmend} />
                <Route  path="/erp/DimissionRejectInfo/:id" component={DimissionRejectInfo} />
                <Route  path="/erp/hr-outjob-refuse" component={DimissionReject} />
                <Route  path="/erp/DepartureAuditInfo/:id" component={DepartureAuditInfo} />
                <Route  path="/erp/hr-outjob-check" component={DepartureAudit} />
                <Route  path="/erp/hr-outjob-add" component={Apply} />
                <Route  path="/erp/sys-user-manager" component={User} />
                <Route  path="/erp/sys-log-log" component={OperationLog} />
                <Route  path="/erp/TableModel" component={TableModel} />
                <Route  path="/erp/Table" component={Table} />
                <Route  path="/erp/hr-setting-department" component={Department} />
                <Route  path="/erp/hr-setting-employeetype" component={StaffType} />
                <Route  path="/erp/hr-setting-nationality" component={Nationality} />
                <Route  path="/erp/hr-setting-nation" component={Nation} />
                <Route  path="/erp/hr-setting-paperstype" component={Card} />
                <Route  path="/erp/hr-setting-educationbackground" component={Education} />
                <Route  path="/erp/hr-setting-degree" component={Degree} />
                <Route  path="/erp/sys-company-info" component={Company} />
                <Route  path="/erp/CompanyUpdate/:id" component={CompanyUpdate} />



                <Route render={() => <Redirect to="/404" />} />
                <Route  component={Table} />
            </Switch>
        )
    }
}
