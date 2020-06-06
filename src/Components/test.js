
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios'



class test extends Component {

  state = {xrpData: [], AccountData: []}
    componentDidMount(){
        // axios.get('https://data.ripple.com/v2/accounts/rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn').then((response)=>{
        //     this.setState({xrpData: response})
        // })
        this.getAccount2()
    }

    async getAccount() {
      await axios.get('https://data.ripple.com/v2/accounts/rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn').then((response)=>{
        this.setState({xrpData: response})
    })
    }

    async getAccount2() {
       await axios.get('https://data.ripple.com/v2/accounts/r44CNwMWyJf4MEA1eHVMLPTkZ1LSv4Bzrv').then((response)=> {
        console.log("Respnse data is: ", response)
   
        return response.data.account_data 
      }).then((info)=> {
        // console.log(info)
        this.setState({xrpData: info})
      })
    }

  render() {
    

    console.log(this.state.xrpData)
  
    return (
      <div>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>XRP Json data</Card.Title>
                    <Card.Text>
                      XRP Leder index: {this.state.xrpData.ledger_index}
                      <br/>
                      XRP Account: {this.state.xrpData.account}
                     <br/>
                      Inception: {this.state.xrpData.inception}
                      <br/>
                      Initial Balance: {this.state.xrpData.initial_balance}
                      <br/>
                      XRP parent ledger: {this.state.xrpData.parent}
                      <br/>
                      XRP transaction Hash: {this.state.xrpData.tx_hash}
                    </Card.Text>
                    <div>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
            
      </div>
    );
  }
}
export default test