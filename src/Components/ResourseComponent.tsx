import ResourseModel from "../Models/ResourceModel";
import { GetResource, statusCode } from "../Http/GetResourceRequest";
import Card from "@material-ui/core/Card";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ChildResourseComponent from "./ChildResourseComponent";
import { Input } from "@material-ui/core";

type Input = {
  resourseId: { value: string };
};

let resourse: ResourseModel;

const ResponseComponent = (): JSX.Element => {
  const [resourse, setResourse] = useState<ResourseModel | undefined>(
    undefined
  );

  return (
    <Card >
      <div >
        <div >
          <Form
            onSubmit={async (e) => {
              e.preventDefault();

              const target = e.target as typeof e.target & Input;
              async function init() {
                let id: number = Number(target.resourseId.value) || 23;
                const result = await GetResource(id);
                setResourse(result);
              }

              await init();
            }}
          >
            <Form.Group controlId="resourseId">
              <Form.Label>
                <i>Enter resourse id</i>
              </Form.Label>
              <Form.Control></Form.Control>
            </Form.Group>
            <Button variant="btn btn-primary active" type="submit">
              Serch
            </Button>
          </Form>
        </div>
        <div >
          <h1 >
            <b>Resourse</b>
          </h1>
          <ChildResourseComponent
            data={resourse?.data}
            support={resourse?.support}
            statusCode={statusCode}
          ></ChildResourseComponent>
        </div>
      </div>
    </Card>
  );
};

export default ResponseComponent;
