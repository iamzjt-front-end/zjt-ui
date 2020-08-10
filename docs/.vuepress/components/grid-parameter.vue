<template>
  <div>
    <table width="100%">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      <tr>
        <td>gutter</td>
        <td>栅格间的间隙，单位为 px</td>
        <td>String | Number</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>栅格的左边距</td>
        <td>String | Number</td>
        <td>1~24</td>
        <td>——</td>
      </tr>
      <tr>
        <td>span</td>
        <td>屏幕宽度：min-width：0px 时栅格的宽度</td>
        <td>String | Number</td>
        <td>1~24</td>
        <td>——</td>
      </tr>
      <tr>
        <td>ipad</td>
        <td>屏幕宽度：min-width：577px 时栅格的宽度</td>
        <td>Object</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>narrow-pc</td>
        <td>屏幕宽度：min-width：769px 时栅格的宽度</td>
        <td>Object</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>narrow-pc</td>
        <td>屏幕宽度：min-width：993px 时栅格的宽度</td>
        <td>Object</td>
        <td>——</td>
        <td>——</td>
      </tr>
      <tr>
        <td>wide-pc</td>
        <td>屏幕宽度：min-width；1201px 时栅格的宽度</td>
        <td>Object</td>
        <td>——</td>
        <td>——</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  }
}
</script>

<style lang="scss" scoped>
table{
  display: table;
  border-collapse: collapse;
  td{
    text-align: center;
  }
}

</style>
