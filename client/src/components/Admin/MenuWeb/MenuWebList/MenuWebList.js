import { useState, useEffect} from 'react'
import { Switch, List, Button, Modal as ModalAntd, notification } from 'antd'
import Modal from '../../../Modal'
import DragSortableList from 'react-drag-sortable'
import './MenuWebList.scss'

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props
    const [isVisibleModal, setisVisibleModal] = useState(false)
    const [modalTitle, setmodalTitle] = useState("")

    useEffect(() => {
        const listItemsArray = []
        menu.forEach(item => {
            listItemsArray.push({
                content: (<div><p>{item.title}</p></div>)
            })
        })
    }, [menu])

    const onSort = (sortedList, dropEvent) => {
        console.log(sortedList)
    }

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button typ="primary">
                    Nuevo menú
                </Button>
            </div>
            <div className="menu-web-list__items">
                <DragSortableList />
            </div>
        </div>
    )
}