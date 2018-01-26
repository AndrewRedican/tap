import _ from 'lodash';

export default (state = null, action) => {
    switch(action.type){
        case 'FETCH_RUBRIC_DATA' :
            const   
                keys = _.remove(_.uniq(_.map(action.payload,'levelId')), undefined),
                data = keys.map((levelId) => { 
                    return _.sortBy(_.filter(action.payload, { 'levelId': levelId}),'sorting').map((o) => {
                        return {
                            questionText : o.questionText,
                            questionType : o.questionType,
                            hints : o.hints,
                            tags : o.tags,
                            weight : o.weight,
                            id : o.index
                        };
                    });
                });
            return data;
    }
    return state;
}