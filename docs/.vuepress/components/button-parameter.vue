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
        <td>type</td>
        <td>设置按钮类型</td>
        <td>String</td>
        <td>default | primary | success | danger | warning | info</td>
        <td>——</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用按钮</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>round</td>
        <td>是否圆角按钮</td>
        <td>Boolean</td>
        <td>true | false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标类名</td>
        <td>String</td>
        <td>参考icon页面</td>
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
